import React, { useState, useEffect } from "react";

function ManageCart() {
  const [cart, setCart] = React.useState([]);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageCart"));
    try {
      if (res === undefined || res === null) {
        res = [];
        localStorage.setItem("techIncStorageCart", JSON.stringify(res));
      }
      setCart(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateCart = (listCartModify) => {
    if (listCartModify === undefined || listCartModify === null) {
      return "Not valid format...";
    }
    localStorage.setItem("techIncStorageCart", JSON.stringify(listCartModify));
    setCart(listCartModify);
  };
  return { cart, updateCart };
}

export default ManageCart;
