import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const FetchContext = createContext();

export const useFetch = () => useContext(FetchContext);

export const FetchProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(false)

  const fetchUser = async (userName) => {
    try {
      setLoading(true)
      const res = await axios.get(`users/${userName}`);
      setUser(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setUser({ message: "Not Found" });
      } else {
        console.error(`Error fetching user: ${err}`);
      }
    }finally{
      setLoading(false)
    }
  };
  return (
    <FetchContext.Provider
      value={{
        setUser,
        fetchUser, 
        user,
        loading
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
