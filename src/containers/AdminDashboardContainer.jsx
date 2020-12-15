import React, { useEffect, useState } from "react";
import { authUser } from "../../firebase/auth";
import { useRecoilState } from "recoil";
import { db } from "../../firebase/firebase";
import { user, allUsersState,pagos } from "../atoms/index";

// COMPONENTS & CONTAINERS
import Error404 from "../components/404";
import AdminDashboard from "../components/AdminDashboard";

function AdminDashboardContainer() {
  const [currentUser, setCurrentUser] = useRecoilState(user);
  const { logout } = authUser();
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const [pagosPendientes, setPagosPendientes] = useState({pendin:[],observer:()=>{}});


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

    const pendingP= []
    const PagosObserver = db
    .collection("payments")
    .where("state", "==", "pending")
    .where("loadedF", "==", true)
    .onSnapshot((data) => {
      data.forEach((data) => {
        pendingP.push(data.data())
      })    
    });
    setPagosPendientes({pending:pendingP,observer:PagosObserver})
    console.log(" pagos pendientes", pagosPendientes)

    return () => unsuscribe();
  }, []);
console.log("AQUI ESTAN LOS PAGOS PENDIENTES",pagosPendientes)

  return !currentUser ? (
    <Error404 />
  ) : (
    <AdminDashboard handleLogout={handleLogout} />
  );
}

export default AdminDashboardContainer;
