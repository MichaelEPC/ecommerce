import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../Components/HeaderContainer";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import ItemsCart from "../../Components/ItemsCart";
import LoaderV2 from "../../Components/LoaderV2";
import FooterContainer from "../../Components/FooterContainer";
import NavMobile from "../../Components/NavMobile";
import "./style.css";
import ManageCart from "./ManageCart";
import ManageCurrentUser from "../SingIn/ManageCurrrentUser";
import ManageUsers from "../SingIn/ManageUsers";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [loading, setLoading] = React.useState(true);
  const { cart, updateCart } = ManageCart();
  const { currentUser, updateCurrentUser } = ManageCurrentUser();
  const { users, updateUsers } = ManageUsers();

  const navigate = useNavigate();

  const modifyAmount = (id, newAmount) => {
    id = parseInt(id);
    const listCartModify = cart.map((products) => {
      products.id === id ? (products.amount = newAmount) : products;
      return products;
    });
    updateCart(listCartModify);
  };

  const deleteProduct = (id) => {
    id = parseInt(id);
    const newListCast = cart.filter((product) => product.id != id);
    updateCart(newListCast);
  };

  const sumTotalPrice = () => {
    let sum = 0;
    cart.forEach((product) => {
      const amount = product.amount;
      sum += amount * parseFloat(product.price);
    });
    return sum;
  };

  const totalProducts = () => {
    let products = 0;
    cart.forEach((product) => {
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

  const notifySucessfull = () =>
    toast.success("Successfully order!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const notifyEmpty = (message) =>
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const sendToMyOrder = async () => {
    if (currentUser === undefined || currentUser === null) {
      navigate("/signin");
      return;
    }
    if (cart == undefined || cart == null) {
      notifyEmpty("Something went wrong...");
      return;
    }
    if (cart.length == 0) {
      notifyEmpty("Cart is empty");
      return;
    }
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const newOrder = {
      id: generateID(),
      date: formattedDate,
      orders: cart,
      state: randomState(),
      maxPrice: sumTotalPrice(),
      productsAmount: totalProducts(),
    };
    let userMod = currentUser;
    userMod.orders.push(newOrder);
    const newListUsers = users.filter((user) => {
      if (user.id === userMod.id) {
        user.orders = userMod.orders;
      }
      return true;
    });
    updateUsers(newListUsers);
    updateCurrentUser(userMod);
    updateCart([]);
    notifySucessfull();
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
      <NavMobile />
      <MainContainer>
        <section className="cartContainer mt-2 flex flex-col items-center lg:flex-row lg:items-start">
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
              {cart.length == 0 ? (
                <div className="text-lg font-semibold">
                  <div className="flex justify-center">
                    <p>Cart empty...</p>
                  </div>
                  <p>add products to the cart</p>
                </div>
              ) : (
                cart?.map((product) => (
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

          <div className="buyDivContainer mb-2 ml-10 mt-10 flex flex-col items-center rounded-lg bg-white shadow-lg lg:mt-0">
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
                sendToMyOrder();
              }}
            >
              Buy
            </button>
          </div>
        </section>
      </MainContainer>
      <section className="FooterContainer relative left-0 ml-4 flex items-center justify-center showNav:left-16">
        <FooterContainer />
      </section>
      <ToastContainer limit={1} />
    </>
  );
}

export default Cart;
