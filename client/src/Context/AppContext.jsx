import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AppContext = createContext();

const AppContextProvider = (props) => {

  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [disasterData, setDisasterData] = useState([]);
  const [volunteersData, setVolunteersData] = useState([]);

  // Fethcing the Disasters Data from the MongoDB
  const getDisastersData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/disastersData');

      if (response.data.success) {
        setDisasterData(response.data.disasters);
      }
      else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log("Error: while getting the disasters data from the mongoDB: ", error);
      toast.error(error.message)
    }
  }

  // Fethcing the Volunteers Data from the MongoDB
  const getVolunteersData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/registeredVolunteers');

      if (response.data.success) {
        setVolunteersData(response.data.volunteers);
      }
      else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log("Error: while getting the volunteers data from the mongoDB: ", error);
      toast.error(error.message)
    }
  }


  useEffect(() => {
    getDisastersData();
    getVolunteersData();
  }, [])


  const value = {
    navigate,
    backendUrl,
    disasterData, getDisastersData,
    volunteersData, getVolunteersData
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;