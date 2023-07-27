import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const labUrl = `${import.meta.env.VITE_BASE_URL}/labs`;
const cabinUrl = `${import.meta.env.VITE_BASE_URL}/cabins`;

const getLabByName = async (name) => {
  try {
    const { data } = await axios.get(`${labUrl}/name/${name}`); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCabinByName = async (name) => {
  try {
    const { data } = await axios.get(`${cabinUrl}/staff/${name}`); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLabs = async () => {
  try {
    const { data } = await axios.get(labUrl); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addLab = async (lab) => {
  try {
    const { data } = await axios.post(labUrl, lab); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addCabin = async (cabin) => {
  try {
    const { data } = await axios.post(cabinUrl, cabin); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const reportLab = async (id) => {
  try {
    const { data } = await axios.patch(`${labUrl}/report/${id}`); // Verify the URL construction
    return data;
  } catch (error) {
    console.log(error);
  }
};

const reportCabin = async (id) => {
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

const AppProvider = ({ children }) => {
  const [Labs, setLabs] = useState([]);
  const [Cabins, setCabins] = useState([]);

  const [labSearchTerm, setLabSearchTerm] = useState("");
  const [cabinSearchTerm, setCabinSearchTerm] = useState("");

  const [labSearchResults, setLabSearchResults] = useState([]);
  const [cabinSearchResults, setCabinSearchResults] = useState([]);

  const [bottomNavValue, setBottomNavValue] = useState(0);

  const handleLabReportBtn = async (id) => {
    const updatedLab = await reportLab(id);
    setLabs((prevLabs) =>
      prevLabs.map((lab) => (lab._id === id ? updatedLab : lab))
    );
  };

  const handleCabinReportBtn = async (id) => {
    const updatedCabin = await reportCabin(id);
    setCabins((prevCabins) =>
      prevCabins.map((cabin) => (cabin._id === id ? updatedCabin : cabin))
    );
  };

  const handleAddLabFormSubmit = async (lab) => {
    const newLab = await addLab(lab);
    setLabs((prevLabs) => [...prevLabs, newLab]);
  };

  const handleAddCabinFormSubmit = async (cabin) => {
    const newCabin = await addCabin(cabin);
    setCabins((prevCabins) => [...prevCabins, newCabin]);
  };

  const handleLabInputChange = async (event) => {
    const value = event.target.value;
    setLabSearchTerm(value);

    if (value === "") {
      setLabSearchResults([]);
    } else {
      const labs = await getLabByName(value);
      setLabSearchResults(labs);
    }
  };

  const handleLabSelectResult = (labId) => {
    const result = labSearchResults.find((lab) => lab._id === labId);
    if (result) {
      setLabSearchTerm(result.name); // Set the selected lab's name as the search term
      setLabSearchResults([]);
      setLabs([result]);
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
    setCabinSearchTerm(result.name); // Update the search term with the selected cabin's name
    setCabinSearchResults([]);
    setCabins([result]);
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
  }, [bottomNavValue]);

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
  }, [Labs, Cabins]);

  return (
    <AppContext.Provider
      value={{
        Labs,
        Cabins,
        bottomNavValue,
        setBottomNavValue,
        labSearchTerm,
        cabinSearchTerm,
        labSearchResults,
        cabinSearchResults,
        handleLabReportBtn,
        handleCabinReportBtn,
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

// using custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

//  children : special pprop , refers to entire application component
export { AppContext, AppProvider };
