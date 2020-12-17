import React, { useEffect, useState } from "react";
import { SingleProject } from "../components/SingleProject";
import { useRecoilState, useRecoilValue } from "recoil";
import { allUsersState, allUsersInProject } from "../atoms/index";
import { db } from "../../firebase/firebase";

export const SingleProjectContainer = ({ project }) => {
  const [projectUsersData, setProjectUsersData] = useState([]);
  
  useEffect(() => {
    const unsuscribe = db
      .collection("projects")
      .doc(project.id)
      .collection("invitedUser")
      .onSnapshot((data) => {
        setProjectUsersData(
          data.docs.map((data) => {
            return data.data();
          })
        );
      });
    return () => unsuscribe();
  }, []);

  function delUserFromProject(userId) {
    db.collection("projects")
      .doc(project.id)
      .collection("invitedUser")
      .doc(userId)
      .delete();
    db.collection("payments")
    .where("userId","==", userId)
    .where("projectId","==",project.id)
    .get()
    .then((querySnapshot)=>{
      querySnapshot.forEach((payment)=>{
        db.collection("payments").doc(payment.id).delete()
      })
    })
  }


  return (
    <>
      <SingleProject
        delUserFromProject={delUserFromProject}
        projectUsersData={projectUsersData}
        project={project}
      />
    </>
  );
};
