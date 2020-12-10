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

  function handlePageChange(page, pageSize) {
    setCurrentPage(page);
  }

  const filterByColumn = (e, column) => {
    if (e.target.innerHTML == "all") return setCurrentUsers(allUsers);
    if (column === "projectInvited") return filterByState(e);
    setCurrentUsers(
      allUsers.filter(
        (user) =>
          user[column] && user[column].toLowerCase() == e.target.innerHTML
      )
    );
  };

  const filterByState = (e) => {
    if (e.target.innerHTML == "En Proyecto")
      return setCurrentUsers(
        allUsers.filter((user) => user.projectInvited !== "")
      );
    setCurrentUsers(allUsers.filter((user) => user.projectInvited === ""));
  };

  useEffect(() => {
    db.collection("users")
      .where("isAdmin", "==", false)
      .onSnapshot((data) => {
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
        currentPage={currentPage}
        filterByState={filterByState}
        filterByColumn={filterByColumn}
        onChange={onChange}
        users={users}
        currentUsers={currentUsers}
        usersPerPage={usersPerPage}
        handlePageChange={handlePageChange}
        isLoading={isLoading}
        setCurrentUsers={setCurrentUsers}
      ></OurCommunity>
    </>
  );
};
