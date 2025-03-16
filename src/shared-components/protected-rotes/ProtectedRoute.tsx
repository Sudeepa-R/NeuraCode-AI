import { Navigate, Outlet } from "react-router-dom";
import { OpenNotificationWithIcon } from "../custom-notification/custom-notification";

const ProtectedRoute = (props: any) => {
  const userData = localStorage.getItem("data");
  const savedUser = JSON.parse(userData || "{}");

  if (!savedUser) {
    return <Navigate to="/login" replace />;
  }

  if (!(props.allowedRoles === savedUser?.user?.role)) {
    OpenNotificationWithIcon("warning", "Access Denied!");
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
