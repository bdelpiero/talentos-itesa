import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAdmin } from "../atoms";
import { db } from "../../firebase/firebase";
import { authUser } from "../../auth/auth";
import InviteComponent from "../components/InviteComponent";

function AdminContainer() {
  const { signup } = authUser();

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <>
      <InviteComponent></InviteComponent>
    </>
  );
}

export default AdminContainer;
