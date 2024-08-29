import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../Components/HeaderContainer/index";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import ItemsOrder from "../../Components/ItemsOrder";
import FooterContainer from "../../Components/FooterContainer";
import NavMobile from "../../Components/NavMobile";
import "./style.css";
import ManageCurrentUser from "../SingIn/ManageCurrrentUser";
import ManageUniqueOrder from "../UniqueOrder/ManageUniqueOrder";

function Orders() {
  const { currentUser } = ManageCurrentUser();
  const { putUniqueOrder } = ManageUniqueOrder();

  const navigate = useNavigate();

  const sumTotalPrice = (order) => {
    let sum = 0;
    order.forEach((product) => {
      const amount = product.amount;
      sum += amount * parseFloat(product.price);
    });
    return sum;
  };

  const sumTotalProduct = (order) => {
    let sum = 0;
    order.forEach((product) => {
      const amount = product.amount;
      sum += parseInt(amount);
    });
    return sum;
  };

  const setOrder = (id) => {
    const orderSelected = currentUser.orders?.filter((order) => order.id == id);
    putUniqueOrder(orderSelected[0]);
    navigate(`/ecomerce-tech/order/${orderSelected[0].id}`);
  };

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Nav />
      <NavMobile />
      <MainContainer>
        <section className="OrdersMain flex flex-col items-center justify-center rounded-md bg-white shadow-md">
          <h1 className="mt-8 text-2xl font-semibold text-principal-blue">
            Orders
          </h1>
          <div className="itemsOrderContainer h-auto rounded-md pb-4">
            {currentUser.orders?.length === undefined ? (
              <div className="mt-10 flex flex-col items-center font-bold text-text-color">
                No order has been made yet...
                <p>
                  ¡Make your first order!,{" "}
                  <span
                    className="cursor-pointer text-principal-blue underline"
                    onClick={() => navigate("/ecomerce-tech")}
                  >
                    buy products
                  </span>
                </p>
              </div>
            ) : (
              currentUser.orders?.map((order) => (
                <ItemsOrder
                  key={order.id}
                  id={order.id}
                  date={order.date}
                  totalPrice={sumTotalPrice(order.orders).toFixed(2)}
                  totalProducts={sumTotalProduct(order.orders)}
                  img={order.orders[0].image}
                  state={order.state}
                  setOrder={setOrder}
                />
              ))
            )}
          </div>
        </section>
      </MainContainer>
      <section className="FooterContainer relative left-0 ml-4 flex items-center justify-center showNav:left-16">
        <FooterContainer />
      </section>
    </>
  );
}

export default Orders;
