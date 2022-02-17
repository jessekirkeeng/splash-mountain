
import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const NewContext = createContext({});

export const useUserContext = () => {
  return useContext(NewContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/api/auth/me")
      .then(({ data }) => {
        return setUser(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <NewContext.Provider value={{ user, setUser }}>
      {children}
    </NewContext.Provider>
  );
};

export default UserProvider;
