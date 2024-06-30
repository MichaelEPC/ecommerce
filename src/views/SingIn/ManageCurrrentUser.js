import React, { useState, useEffect } from "react";

function ManageCurrentUser() {
  const [currentUser, setCurrentUser] = React.useState({});
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageCurrentUser"));
    try {
      if (res === undefined || res === null) {
        res = {};
        localStorage.setItem("techIncStorageCurrentUser", JSON.stringify(res));
      }
      setCurrentUser(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateCurrentUser = async (currentUser) => {
    if (currentUser === undefined || currentUser === null) {
      return "Not valid format...";
    }
    localStorage.setItem(
      "techIncStorageCurrentUser",
      JSON.stringify(currentUser),
    );
    setCurrentUser(currentUser);
  };
  return { currentUser, updateCurrentUser };
}

export default ManageCurrentUser;
