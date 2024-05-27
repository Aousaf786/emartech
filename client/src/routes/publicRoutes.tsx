import { FC, useEffect } from "react";
import { useAppSelector } from "@/hooks/storeHooks";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoutes: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default PublicRoutes;
