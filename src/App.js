import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase"
import {AuthProvider} from '../auth/auth'

function App() {
  const [name, setName] = useRecoilState(userName);

  useEffect(() => {
    db.collection("users")
      .doc("McdZHiZqbuwa6hFZ3Pi2")
      .onSnapshot((doc) => {
        console.log(doc.data());
        setName(doc.data().name);
      });
  }, []);

  const handleClick = () => {
    db.collection("users").doc("McdZHiZqbuwa6hFZ3Pi2").update({ name: "Nano" });
  };

  return (
    <>
      <AuthProvider>
        <h1>Hello {name}</h1>
        <button onClick={handleClick}></button>
      </AuthProvider>
      
    </>
  );
}

export default App;
