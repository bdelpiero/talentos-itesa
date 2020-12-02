import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import AllProjects from "../components/AllProjects";

function AllProjectsContainer() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("projects")
      .get()
      .then((projects) => {
        setProjects(projects.docs);
      });
  }, []);

  const deleteProject = (project)=>{
    
      db.collection("projects")
        .doc(project.id)
        .delete()
        .then(() => {
          console.log("project deleted")
        });
  }

  return <AllProjects 
  deleteProject={deleteProject}
  projects={projects} />;
}

export default AllProjectsContainer;
