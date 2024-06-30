import React, { useEffect } from "react";

function ManageProductDetail() {
  const [product, setProduct] = React.useState({});
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageProductDetail"));
    try {
      if (res === undefined || res === null) {
        res = {};
        localStorage.setItem(
          "techIncStorageProductDetail",
          JSON.stringify(res),
        );
      } else {
        setProduct(res);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const putProductDetail = (product) => {
    if (product == undefined || product == null) {
      return "Error: something went wrong!...";
    }
    localStorage.setItem(
      "techIncStorageProductDetail",
      JSON.stringify(product),
    );
    setProduct(product);
  };
  return { product, putProductDetail };
}

export default ManageProductDetail;
