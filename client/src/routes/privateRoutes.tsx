import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "@/hooks/storeHooks";
import { GlobalLoader } from "@/components/common";

const PrivateRoutes: FC = () => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (isLoading) {
    return <GlobalLoader />;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} />
  );
};

export default PrivateRoutes;
