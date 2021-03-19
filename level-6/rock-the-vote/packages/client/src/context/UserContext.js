import { createContext, useState, useEffect } from "react";
import { createUser, getUser } from "../services/api-auth";
import { loadState, saveState } from "../utils/persistState";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const persistedState = loadState("user");
  const initialState = persistedState || { user: {}, token: "" };
  const [userData, setUserData] = useState(initialState);

  const signup = async credentials => {
    const data = await createUser(credentials);
    setUserData(data);
  };

  const login = async credentials => {
    const data = await getUser(credentials);
    setUserData(data);
  };

  const logout = () => {
    setUserData(initialState);
  };

  useEffect(() => {
    saveState("user", userData);
  }, [userData]);

  const value = {
    ...userData,
    signup,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
