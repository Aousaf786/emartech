import { FC, createContext, useContext, useState } from "react";
import { getUserFromLocalStorage } from "../utils";
import { useAppSelector } from "@/hooks/storeHooks";

const AuthContext = createContext({});

export type PropType = {
  children: React.ReactNode;
};

export const AuthProvider: FC<PropType> = ({ children }) => {
  // const [user, setUser] = useState(getUserFromLocalStorage());
  const { user } = useAppSelector((state) => state.auth);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
