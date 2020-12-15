import React, { useState, useEffect } from "react";
import { OurCommunity } from "../components/OurCommunity";
import { db } from "../../firebase/firebase";
import { FastBackwardFilled } from "@ant-design/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { allUsersState } from "../atoms/index";

export const OurCommunityContainer = () => {
  const allUsers = useRecoilValue(allUsersState);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  console.log(allUsers, "allUsers");
  function onChange(e) {
    setCurrentUsers(
      allUsers.filter((user) => {
        if (user.name.toLowerCase().match(e.target.value.toLowerCase()))
          return user.name.toLowerCase().match(e.target.value.toLowerCase());
        if (user.email.toLowerCase().match(e.target.value.toLowerCase()))
          return user.email.toLowerCase().match(e.target.value.toLowerCase());
      })
    );
  }

  useEffect(() => {
    const unsuscribe = db
      .collection("users")
      .where("isAdmin", "==", false)
      .onSnapshot((data) => {
        setCurrentUsers(
          data.docs.map((data) => {
            return data.data();
          })
        );
      });
    return () => unsuscribe();
  }, []);

  return (
    <>
      <OurCommunity
        onChange={onChange}
        // users={users}
        currentUsers={currentUsers}
        isLoading={isLoading}
        setCurrentUsers={setCurrentUsers}></OurCommunity>
    </>
  );
};
