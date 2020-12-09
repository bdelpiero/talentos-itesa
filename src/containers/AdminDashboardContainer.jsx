import React from "react";
import { authUser } from "../../firebase/auth";
import { useRecoilState } from "recoil";
import { user } from "../atoms/index";

// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";

function AdminDashboardContainer() {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const { logout } = authUser();

  console.log("ESTE CONSOLOG ES EN ADMINDASH", currentUser);
  
  const handleLogout = () => logout()

  return !currentUser ? (
    <Error404 />
  ) : (
    <AdminDashboard handleLogout={handleLogout} />
  );
}

export default AdminDashboardContainer;
