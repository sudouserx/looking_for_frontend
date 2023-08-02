import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const labUrl = `${import.meta.env.VITE_BASE_URL}/labs`;
const cabinUrl = `${import.meta.env.VITE_BASE_URL}/cabins`;

function refreshPage() {
  window.location.reload(false);
}

const getLabByName = async (name) => {
  try {
    const { data } = await axios.get(`${labUrl}/name/${name}`); 
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLabs = async () => {
  try {
    const { data } = await axios.get(`${cabinUrl}/staff/${name}`); 
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLabById = async (id) => {
  try {
    const { data } = await axios.get(labUrl); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getReportedLabs = async () => {
  try {
    const { data } = await axios.post(labUrl, lab); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addLab = async (lab) => {
  try {
    const { data } = await axios.post(cabinUrl, cabin); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateLab = async (lab) => {
  try {
    const { data } = await axios.patch(`${labUrl}/report/${id}`); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};
const reportLab = async (id) => {
  try {
    const { data } = await axios.patch(`${cabinUrl}/report/${id}`); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getCabins = async () => {
  try {
    const { data } = await axios.get(cabinUrl); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const cabins = await getCabins();
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const [Labs, setLabs] = useState([]);
  const [Cabins, setCabins] = useState([]);

  const [labSearchTerm, setLabSearchTerm] = useState("");
  // const [cabinSearchTerm, setCabinSearchTerm] = useState("");

  const [labSearchResults, setLabSearchResults] = useState([]);
  // const [cabinSearchResults, setCabinSearchResults] = useState([]);

  const [bottomNavValue, setBottomNavValue] = useState(0);

  const [dataChanged, setDataChanged] = useState(false); // Track if new data has been added

  const handleLabReportBtn = async (id) => {
    const updatedLab = await reportLab(id);
    setLabs(updatedLab);
  };

  const handleAddLabFormSubmit = async (lab) => {
    const labs = await addLab(lab);
    if (labs) {
      setLabs(labs);
    }
  };

  // const handleCabinReportBtn  = async (event) => {
  //   const cabinId = parseInt(event.currentTarget.value);
  //   const cabins = await reportLab(cabinId);
  //   setLabs([cabins]);
  // };

  const handleLabSearchBtn = () => {
    setLabs(labSearchResults);
    setLabSearchResults([]);
  };

  const handleLabInputChange = async (event) => {
    if (event.target.value === "") {
      setLabSearchResults([]);
      return;
    }
    const value = event.target.value;
    setLabSearchTerm(value);

    // Perform search and update labSearchResults state
    const labs = await getLabByName(value);
    setLabSearchResults(labs);
  };

  const handleLabSelectResult = (labId) => {
    const result = labSearchResults.find((lab) => lab._id === labId);
    if (result) {
      setLabSearchResults([]);
      setLabs([result]); // Only set the selected lab to the Labs state
    }
  };

  const handleCabinInputChange = async (event) => {
    const value = event.target.value;
    setCabinSearchTerm(value);

    if (value === "") {
      setCabinSearchResults([]);
    } else {
      const cabins = await getCabinByName(value);
      setCabinSearchResults(cabins);
    }
  };

  const handleCabinSelectResult = (cabinId) => {
    const result = cabinSearchResults.find((cabin) => cabin._id === cabinId);
    if (result) {
      setCabinSearchResults([]);
      setCabins([result]); // Only set the selected cabin to the Cabins state
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const labs = await getLabs();
        setLabs(labs);

        const cabins = await getCabins();
        setCabins(cabins);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    setCabinSearchResults([]); // Reset cabinSearchResults to an empty array
    setLabSearchResults([]); // Reset labSearchResults to an empty array
  }, [bottomNavValue]);

  useEffect(() => {
    // Define a function to fetch the new labs and cabins
    const fetchNewData = async () => {
      try {
        const newLabs = await getLabs();
        setLabs(newLabs);

        const newCabins = await getCabins();
        setCabins(newCabins);

        setDataChanged(false); // Reset dataChanged to false after fetching new data
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function after dataChanged is set to true
    if (dataChanged) {
      fetchNewData();
    }
  }, [dataChanged]);

  useEffect(() => {
    // Define a function to fetch the labs and cabins when the search term is selected
    const fetchSearchResults = async () => {
      try {
        if (labSearchTerm !== "") {
          const labs = await getLabByName(labSearchTerm);
          setLabSearchResults(labs);
        }

        if (cabinSearchTerm !== "") {
          const cabins = await getCabinByName(cabinSearchTerm);
          setCabinSearchResults(cabins);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function when the search terms change
    fetchSearchResults();
  }, [labSearchTerm, cabinSearchTerm]);

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        Labs,
        Cabins,
        bottomNavValue,
        setBottomNavValue,
        labSearchTerm,
        labSearchResults,
        handleLabSearchBtn,
        handleLabReportBtn,
        handleLabInputChange,
        handleLabSelectResult,
        handleAddLabFormSubmit,
        handleAddCabinFormSubmit,
        handleCabinInputChange,
        handleCabinSelectResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
