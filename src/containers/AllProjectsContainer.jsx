import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import AllProjects from "../components/AllProjects";

function AllProjectsContainer({ setItem }) {
  const [projects, setProjects] = useState([]);
  const [status,setStatus] = useState("");

  useEffect(() => {
    db.collection("projects").onSnapshot((projects) => {
      // console.log(projects.docs.id, "aca estan todos los proyectos!")
      setProjects(
        projects.docs.map((project) => {
          let proyecto = project.data();
          proyecto.id = project.id;
          proyecto.key = project.id;
          return proyecto;
        })
      );
    });
  }, []);

  const deleteProject = (project) => {
    db.collection("projects").doc(project.id).delete();
  };

  const changeStatus = (project) => {
    if(project.status == "on Development"){
      db.collection("projects").doc(project.id).update({
        status: "finished"
      });
    }
    else{
      db.collection("projects").doc(project.id).update({
        status: "on Development"
      });
    }
    
  };


  function handleClick() {
    setItem(3);
  }

  return (
    <AllProjects
      deleteProject={deleteProject}
      projects={projects}
      handleClick={handleClick}
      changeStatus={changeStatus}
    />
  );
}

export default AllProjectsContainer;
