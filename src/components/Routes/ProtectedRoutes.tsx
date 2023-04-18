import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  const auth = user ? true : false;

  return auth ? <Outlet /> : <Navigate to="/signUp" />;
};

export default ProtectedRoutes;
