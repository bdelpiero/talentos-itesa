import AdminComponent from "../components/AdminComponent";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAdmin } from "../atoms";
import { db } from "../../firebase";

function AdminContainer() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    let data = e.target.name;

    if (data == "name") setName(e.target.value);
    if (data == "lastName") setLastName(e.target.value);
    if (data == "email") setEmail(e.target.value);
    if (data == "password") setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("admins")
      .add({
        name,
        lastName,
        email,
        password,
      })
      .then(() => {
        console.log("Se creo correctamente");
      });
  };

  return (
    <AdminComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    ></AdminComponent>
  );
}

export default AdminContainer;
