import React, { useEffect } from "react";
import HeaderContainer from "../../Components/HeaderContainer";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import ItemsCart from "../../Components/ItemsCart";
import LoaderV2 from "../../Components/LoaderV2";
import "./style.css";
import { ProductInCart } from "./ProductInCart";
import ManageOrders from "../Orders/ManageOrders";

function Cart() {
  const [loading, setLoading] = React.useState(true);
  const { productsInCart, putProductsIncart } = ProductInCart();
  const { orders, putMyOrder } = ManageOrders();

  const modifyAmount = (id, newAmount) => {
    id = parseInt(id);
    const listCartModify = productsInCart.map((products) => {
      products.id === id ? (products.amount = newAmount) : products;
      return products;
    });
    putProductsIncart(listCartModify);
  };

  const deleteProduct = (id) => {
    id = parseInt(id);
    const newListCast = productsInCart.filter((product) => product.id != id);
    putProductsIncart(newListCast);
  };

  const sumTotalPrice = () => {
    let sum = 0;
    productsInCart.forEach((product) => {
      const amount = product.amount;
      sum += amount * parseFloat(product.price);
    });
    return sum;
  };

  const totalProducts = () => {
    let products = 0;
    productsInCart.forEach((product) => {
      const amount = product.amount;
      products += parseInt(amount);
    });
    return products;
  };

  const randomState = () => {
    const state = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    let messageState;
    switch (state) {
      case 1:
        messageState = "Taking order";
        break;
      case 2:
        messageState = "Packing ordered";
        break;
      case 3:
        messageState = "On way";
        break;
      default:
        messageState = "Delivered";
        break;
    }
    return messageState;
  };

  const generateID = () => Date.now();

  const sendToMyOrder = (listCart) => {
    if (listCart == undefined || listCart == null) {
      return "Error: something went wrong!...";
    }
    if (listCart.length == 0) {
      return "Cart Empty!";
    }
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const orderOBject = {
      id: generateID(),
      date: formattedDate,
      orders: listCart,
      state: randomState(),
      maxPrice: sumTotalPrice(),
      productsAmount: totalProducts(),
    };
    let listOrders = orders;
    listOrders.push(orderOBject);
    putMyOrder(listOrders);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Nav />
      <MainContainer>
        <section className="cartContainer mt-2 flex">
          <div className="OrderContainer flex flex-col rounded-lg border-2 border-ligh-gray bg-white shadow-md">
            <div className="flex flex-col items-center border-b-2 border-ligh-gray p-2">
              <p className="ml-4 mt-2 self-start text-2xl font-bold text-principal-blue">
                Cart
              </p>
              <p className="mr-4 self-end text-2xl font-bold text-text-color">
                Price
              </p>
            </div>
            {loading && (
              <div className="LoaderDivV2 flex items-center justify-center">
                <LoaderV2 />
              </div>
            )}
            <div
              className={`${!loading ? "InfoOderContainer flex flex-col items-center justify-center p-4" : "hidden"}`}
            >
              {productsInCart.length == 0 ? (
                <div className="text-lg font-semibold">
                  <div className="flex justify-center">
                    <p>Cart empty...</p>
                  </div>
                  <p>add products to the cart</p>
                </div>
              ) : (
                productsInCart?.map((product) => (
                  <ItemsCart
                    key={product.id}
                    id={product.id}
                    name={product.title}
                    img={product.image}
                    price={product.price}
                    category={product.category}
                    stars={product.rating.rate}
                    quantitative={product.amount}
                    modifyAmount={modifyAmount}
                    deleteProduct={deleteProduct}
                  />
                ))
              )}
            </div>
          </div>

          <div className="buyDivContainer ml-10 flex flex-col items-center rounded-lg bg-white shadow-lg">
            <p className="mt-2 text-xl font-bold text-principal-blue">
              Payment
            </p>
            {/* Algorithm location its in utils/index.jsx */}
            <div className="flex h-auto w-4/5 flex-col justify-center border-b-4 border-ligh-gray p-2">
              <p className="text-2xl font-normal">
                Total:
                <span className="ml-2 font-semibold">{`${!loading ? `US$${sumTotalPrice().toFixed(2)}` : "..."}`}</span>
              </p>
              <p className="mt-2 text-2xl font-normal">
                Products:
                <span className="ml-1 font-semibold">{`${!loading ? `${totalProducts()}` : "..."}`}</span>
              </p>
            </div>
            <button
              className="buyCart mt-5 rounded-md bg-principal-blue text-xl font-bold text-white"
              onClick={() => {
                sendToMyOrder(productsInCart);
                putProductsIncart([]);
              }}
            >
              Buy
            </button>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

export default Cart;
