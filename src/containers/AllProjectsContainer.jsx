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

  return <AllProjects projects={projects} />;
}

export default AllProjectsContainer;
