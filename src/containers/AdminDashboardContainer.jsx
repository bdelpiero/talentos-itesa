import React, { useEffect } from "react";
import { authUser } from "../../firebase/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { db } from "../../firebase/firebase";
import { user, allUsersState } from "../atoms/index";

// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";

function AdminDashboardContainer() {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const { logout } = authUser();
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);

  const handleLogout = () => logout();

  useEffect(() => {
    const unsuscribe = db
      .collection("users")
      .where("isAdmin", "==", false)
      .onSnapshot((data) => {
        setAllUsers(
          data.docs.map((data) => {
            return data.data();
          })
        );
      });
    return () => unsuscribe();
  }, []);
  return !currentUser ? (
    <Error404 />
  ) : (
    <AdminDashboard handleLogout={handleLogout} />
  );
}

export default AdminDashboardContainer;
