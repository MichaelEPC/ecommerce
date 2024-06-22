import React, { useEffect } from "react";

function ManageOrders() {
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageOrders"));
    try {
      if (res == undefined || res == null) {
        res = [];
        localStorage.setItem("techIncStorageOrders", JSON.stringify(res));
      } else {
        setOrders(res);
      }
    } catch (error) {}
  }, []);
  const putMyOrder = (listOfOrders) => {
    if (listOfOrders == undefined || listOfOrders == null) {
      return "Error: something went wrong!...";
    }
    if (listOfOrders.length == 0) {
      return "Cart Empty!";
    }
    localStorage.setItem("techIncStorageOrders", JSON.stringify(listOfOrders));
    setOrders(listOfOrders);
  };
  return { orders, putMyOrder };
}

export default ManageOrders;
