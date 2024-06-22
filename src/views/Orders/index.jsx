import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../Components/HeaderContainer/index";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import ItemsOrder from "../../Components/ItemsOrder";
import "./style.css";
import ManageOrders from "./ManageOrders";
import ManageUniqueOrder from "../UniqueOrder/ManageUniqueOrder";

function Orders() {
  const { orders, putMyOrder } = ManageOrders();
  const { uniqueOrder, putUniqueOrder } = ManageUniqueOrder();

  const navigate = useNavigate();

  const sumTotalPrice = (order) => {
    let sum = 0;
    order.forEach((product) => {
      const amount = product.amount;
      sum += amount * parseFloat(product.price);
    });
    return sum;
  };

  const setOrder = (id) => {
    const orderSelected = orders.filter((order) => order.id == id);
    putUniqueOrder(orderSelected[0]);
    navigate(`/order/${orderSelected[0].id}`);
  };
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Nav />
      <MainContainer>
        <section className="OrdersMain flex flex-col items-center justify-center rounded-md bg-white shadow-md">
          <h1 className="mt-8 text-2xl font-semibold text-principal-blue">
            Orders
          </h1>
          <div className="h-auto rounded-md pb-4">
            {orders.length === 0 ? (
              <div>No order</div>
            ) : (
              orders?.map((order) => (
                <ItemsOrder
                  key={order.id}
                  id={order.id}
                  date={order.date}
                  totalPrice={sumTotalPrice(order.orders).toFixed(2)}
                  totalProducts={order.orders.length}
                  img={order.orders[0].image}
                  state={order.state}
                  setOrder={setOrder}
                />
              ))
            )}
          </div>
        </section>
      </MainContainer>
    </>
  );
}

export default Orders;
