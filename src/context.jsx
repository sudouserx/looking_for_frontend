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
    const { data } = await axios.get(labUrl + `/name/${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLabs = async () => {
  try {
    const { data } = await axios.get(labUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLabById = async (id) => {
  try {
    const { data } = await axios.get(labUrl + `/${id}`);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

const getReportedLabs = async () => {
  try {
    const { data } = await axios.get(labUrl + `/reported`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addLab = async (lab) => {
  try {
    const { data } = await axios.post(labUrl, lab);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateLab = async (lab) => {
  try {
    const { data } = await axios.put(labUrl + `/${lab.id}`, lab);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const reportLab = async (id) => {
  try {
    const { data } = await axios.patch(labUrl + `/report/${id}`);
    // refreshPage();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getCabins = async () => {
  try {
    const { data } = await axios.get(cabinUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// const cabins = await getCabins();
const AppProvider = ({ children }) => {
  const [Labs, setLabs] = useState([]);
  const [Cabins, setCabins] = useState([]);

  const [labSearchTerm, setLabSearchTerm] = useState("");
  // const [cabinSearchTerm, setCabinSearchTerm] = useState("");

  const [labSearchResults, setLabSearchResults] = useState([]);
  // const [cabinSearchResults, setCabinSearchResults] = useState([]);

  const [bottomNavValue, setBottomNavValue] = useState(0);

  // const labs = await getLabs();
  // const cabins = await getCabins();

  useEffect(() => {
    const asyncfunc = async () => {
      const labs = await getLabs();
      setLabs(labs);
    };
    asyncfunc();
  }, []);

  useEffect(() => {
    const asyncfunc = async () => {
      const labs = await getLabs();
      setLabs(labs);
    };
    asyncfunc();
  }, [reportLab]);

  useEffect(() => {
    const asyncfunc = async () => {
      const cabins = await getCabins();
      setCabins(cabins);
    };
    asyncfunc();
  }, []);

  useEffect(() => {
    const asyncfunc = async () => {
      const labs = await getLabs();
      setLabs(labs);
    };
    asyncfunc();
  }, [bottomNavValue]);

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
    setLabSearchTerm(result);
    setLabSearchResults([]);
    setLabs([result]);
  };

  return (
    <AppContext.Provider
      value={{
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
