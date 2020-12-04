import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import AllProjects from "../components/AllProjects";

function AllProjectsContainer({ setItem }) {
  const [projects, setProjects] = useState([]);

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

  function handleClick() {
    setItem(3);
  }

  return (
    <AllProjects
      deleteProject={deleteProject}
      projects={projects}
      handleClick={handleClick}
    />
  );
}

export default AllProjectsContainer;
