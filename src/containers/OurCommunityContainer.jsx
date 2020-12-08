import React, { useState, useEffect } from "react";
import { OurCommunity } from "../components/OurCommunity";
import { db } from "../../firebase/firebase";
import { FastBackwardFilled } from "@ant-design/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { allUsersState } from "../atoms/index";

export const OurCommunityContainer = () => {
  const [allUsers, setAllUsers] = useRecoilState(allUsersState);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  function onChange(e) {
    setCurrentUsers(
      allUsers.filter((user) => {
        setIsLoading(true);
        if (user.name.toLowerCase().match(e.target.value.toLowerCase()))
          return user.name.toLowerCase().match(e.target.value.toLowerCase());
        if (user.email.toLowerCase().match(e.target.value.toLowerCase()))
          return user.email.toLowerCase().match(e.target.value.toLowerCase());
      }),
      setIsLoading(false)
    );
  }

  function handlePageChange(page, pageSize) {
    setCurrentPage(page);
  }

  useEffect(() => {
    db.collection("users")
      .where("isAdmin", "==", false)
      .onSnapshot((data) => {
        setAllUsers(
          data.docs.map((data) => {
            return data.data();
          })
        );
        setCurrentUsers(
          data.docs.map((data) => {
            return data.data();
          })
        );
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const users = currentUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <OurCommunity
        onChange={onChange}
        users={users}
        currentUsers={currentUsers}
        usersPerPage={usersPerPage}
        handlePageChange={handlePageChange}
        isLoading={isLoading}
      ></OurCommunity>
    </>
  );
};
