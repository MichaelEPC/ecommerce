import React, { useEffect } from "react";

function ManageUniqueOrder() {
  const [uniqueOrder, setUniqueOrders] = React.useState({});
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageUniqueOrder"));
    try {
      if (res === undefined || res === null) {
        res = {};
        localStorage.setItem("techIncStorageUniqueOrder", JSON.stringify(res));
      } else {
        setUniqueOrders(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const putUniqueOrder = (order) => {
    if (order == undefined || order == null) {
      return "Error: something went wrong!...";
    }
    if (order.orders.length == 0) {
      return "No items in order";
    }
    localStorage.setItem("techIncStorageUniqueOrder", JSON.stringify(order));
    setUniqueOrders(order);
  };
  return { uniqueOrder, putUniqueOrder };
}

export default ManageUniqueOrder;
