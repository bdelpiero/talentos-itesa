import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userName } from "./atoms";
import { db } from "../firebase";

function RegisterFreelancerContainer() {
    const [name, setName] = useRecoilState(userName);

    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        freelancerType: '',
    })
    const [step, setStep] = useState(1)

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    return (
        <RegisterFreelancer handleChange={handleChange} data={data} />
    );
}

export default RegisterFreelancerContainer;

////// LOGICA DE FIRESTORE
/* useEffect(() => {
    db.collection("users")
      .doc("McdZHiZqbuwa6hFZ3Pi2")
      .onSnapshot((doc) => {
        console.log(doc.data());
        setName(doc.data().name);
      });
  }, []);

  const handleClick = () => {
    db.collection("users").doc("McdZHiZqbuwa6hFZ3Pi2").update({ name: "Nano" });
  }; */