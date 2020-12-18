import React, { useState,useEffect } from "react";
import { db } from "../../firebase/firebase";
import firebase from "firebase/app";
import Resume from "../components/Resume";



export default ({ pendingPayments, setItem, setProject }) => {
 
  const [projects, setProjects] = useState([]);
 

 useEffect(() => {
  const unsuscribe = db.collection("projects").onSnapshot((projects) => {
    projects = projects.docs.map((project) => {
      let proyecto = project.data();
      proyecto.id = project.id;
      proyecto.key = project.id;
      return proyecto;
    });
    setProjects(projects);
    
  });
  return () => unsuscribe();
}, []);


const pendingProjects= projects.filter((project)=>{
  return project.status == "On Development"
}).length

const totalPagos=pendingPayments.filter((payment)=>{
  return payment.state == "pending"
}).reduce((a,b)=>{
  return a + +b.monto
},0)

const totalProject= projects.length

  return (
    <Resume
    setItem={setItem}
    pendingPayments={pendingPayments}
    totalProject={totalProject}
    pendingProjects={pendingProjects}
    totalPagos={totalPagos}
    />
  );
};
