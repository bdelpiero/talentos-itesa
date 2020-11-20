import RegisterAdminComponent from "../components/RegisterAdminComponent";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAdmin } from "../atoms";
import { db } from "../../firebase/firebase";
import { authUser } from "../../auth/auth";

function RegisterAdminContainer() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = authUser();

  const handleChange = (e) => {
    let data = e.target.name;
    if (data == "name") setName(e.target.value);
    if (data == "lastName") setLastName(e.target.value);
    if (data == "email") setEmail(e.target.value);
    if (data == "password") setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password).then((data) => {
      console.log("ACA ESTA LA DATA", data);
      return db.collection("admins").doc(data.user.uid).set({
        name,
        lastName,
      });
    });
  };

  return (
    <RegisterAdminComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    ></RegisterAdminComponent>
  );
}

export default RegisterAdminContainer;
