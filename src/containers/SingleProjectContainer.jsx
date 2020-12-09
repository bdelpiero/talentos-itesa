import React, { useEffect, useState } from "react";
import { SingleProject } from "../components/SingleProject";
import { useRecoilState, useRecoilValue } from "recoil";
import { allUsersState, allUsersInProject } from "../atoms/index";
import { db } from "../../firebase/firebase";
export const SingleProjectContainer = ({ project }) => {
  const allUsers = useRecoilValue(allUsersState);
  const [projectUsersData, setProjectUsersData] = useState([]);

  useEffect(() => {
    db.collection("projects")
      .doc(project.id)
      .collection("invitedUser")
      .onSnapshot((data) => {
        setProjectUsersData(
          data.docs.map((data) => {
            /* console.log("ACA ESTA LA DATA", data.data()); */
            return data.data();
          })
        );
      });
  }, []);

  function delUserFromProject(userId) {
    db.collection("projects")
      .doc(project.id)
      .collection("invitedUser")
      .doc(userId)
      .delete();
  }

  return (
    <>
      <SingleProject
        allUsers={allUsers}
        delUserFromProject={delUserFromProject}
        projectUsersData={projectUsersData}
        project={project}
      />
    </>
  );
};
