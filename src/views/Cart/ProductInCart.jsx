import React, { useEffect } from "react";

function ProductInCart() {
  const [productsInCart, setProductsInCart] = React.useState([]);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("techIncStorageCart"));
    try {
      if (res == undefined) {
        res = [];
        localStorage.setItem("techIncStorageCart", JSON.stringify(res));
        setProductsInCart([]);
      } else {
        setProductsInCart(res);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  const putProductsIncart = (newListCartProduct) => {
    localStorage.setItem(
      "techIncStorageCart",
      JSON.stringify(newListCartProduct),
      setProductsInCart(newListCartProduct),
    );
  };
  return { productsInCart, putProductsIncart };
}

export { ProductInCart };
