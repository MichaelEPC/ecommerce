import React, { useState, useEffect } from "react";

function ManageUsers() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageUsers"));
    if (res === undefined || res === null) {
      res = [];
      localStorage.setItem("techIncStorageUsers", JSON.stringify(res));
    }
    setUsers(res);
  }, []);

  const updateUsers = async (users) => {
    if (users === undefined || users === null) {
      return "Not valid format...";
    }
    setUsers(users);
    localStorage.setItem("techIncStorageUsers", JSON.stringify(users));
  };
  return { users, updateUsers };
}

export default ManageUsers;
