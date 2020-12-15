import React, { useEffect, useState } from "react";
import { SingleUser } from "../components/SingleUser";
import { useRecoilState } from "recoil";
import { allUsersState, projectInvited } from "../atoms/index";

export const SingleUserContainer = ({ selectedUser }) => {
  const [selectedUserData, setSelectedUserData] = useState({});
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const [userProjects, setUserProjects] = useState({});
  useEffect(() => {
    allUsers.map((user) => {
      if (user.id === selectedUser) setSelectedUserData(user);
    });
    return () => {};
  }, []);

  return (
    <>
      <SingleUser
        selectedUserData={selectedUserData}
        /* userProjects={userProjects} */
      />
    </>
  );
};
