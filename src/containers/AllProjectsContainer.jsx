import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import AllProjects from "../components/AllProjects";

function AllProjectsContainer({ setItem, setProject }) {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  function onChange(e) {
    setFilterProjects(
      projects.filter((project) => {
        return project.name.toLowerCase().match(e.target.value.toLowerCase());
      })
    );
  }

  useEffect(() => {
    const unsuscribe = db.collection("projects").onSnapshot((projects) => {
      projects = projects.docs.map((project) => {
        let proyecto = project.data();
        proyecto.id = project.id;
        proyecto.key = project.id;
        return proyecto;
      });
      setProjects(projects);
      setFilterProjects(projects);
    });
    return () => unsuscribe();
  }, []);

  const deleteProject = (project) => {
    db.collection("projects").doc(project.id).delete();
  };

  const changeStatus = (project) => {
    if (project.status == "pending") return;

    const newStatus =
      project.status == "On Development" ? "Finished" : "On Development";
    const newTotal =
      project.status == "On Development" ? -1 : 1  
    db.collection("projects")
      .doc(project.id)
      .update({
        status: newStatus,
      })
      .then(() => {
        db.collection("projects")
          .doc(project.id)
          .collection("invitedUser")
          .get()
          .then((proyectos) =>
            proyectos.forEach((user) => {
              db.collection("projects")
                .doc(project.id)
                .collection("invitedUser")
                .doc(user.id)
                .update({
                  status: newStatus,
                })
                return user.id
            }).then((user)=>{
              db.collection("users").doc(user).
              get()
              .then((doc)=>{
                const user = doc.data()
                if(!user.activeProjectsCounter) return
                db.collection("users").doc(user.id).update({
                  activeProjectsCounter: user.activeProjectsCounter + newTotal
                })
              })
            })
            
          )
      });
  };

  function handleClick(proyecto) {
    setItem(3);
    setProject(proyecto);
  }

  return (
    <AllProjects
      deleteProject={deleteProject}
      projects={filterProjects}
      handleClick={handleClick}
      changeStatus={changeStatus}
      onChange={onChange}
    />
  );
}

export default AllProjectsContainer;
