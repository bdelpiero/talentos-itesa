import React, { useEffect, useState } from "react";
import { SingleUser } from "../components/SingleUser";
import { useRecoilState } from "recoil";
import { allUsersState, projectInvited } from "../atoms/index";
import { db } from "../../firebase/firebase";

export const SingleUserContainer = ({ selectedUser }) => {
  const [selectedUserData, setSelectedUserData] = useState({});
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const [userProjects, setUserProjects] = useState(!{});
  useEffect(() => {
    allUsers.map((user) => {
      if (user.id === selectedUser) setSelectedUserData(user);
    });
    return () => {};
  }, []);

  useEffect(() => {
    db.collectionGroup("invitedUser")
      .where("id", "==", selectedUser)
      .onSnapshot((data) => {
        setUserProjects(
          data.docs.map((project) => {
            return project.data();
          })
        );
      });
    return () => {};
  }, []);

  return (
    <>
      <SingleUser
        selectedUserData={selectedUserData}
        userProjects={userProjects}
      />
    </>
  );
};
