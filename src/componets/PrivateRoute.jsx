import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return admin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
