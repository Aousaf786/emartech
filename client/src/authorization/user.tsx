import { Navigate } from "react-router-dom";
import { PropType } from "../contextProviders/authentication";
import { FC } from "react";

import { useAppSelector } from "@/hooks/storeHooks";

export const UserRoute: FC<PropType> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};
