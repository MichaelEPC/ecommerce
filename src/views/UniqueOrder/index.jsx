import React, { useEffect } from "react";
import HeaderContainer from "../../Components/HeaderContainer/index";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import ItemsUniqueOrder from "../../Components/ItemsUniqueOrder";
import "./style.css";
import ManageUniqueOrder from "./ManageUniqueOrder";
import { useNavigate } from "react-router-dom";

function UniqueOrders() {
  const { uniqueOrder } = ManageUniqueOrder();
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Nav />
      <MainContainer>
        <section className="relative mt-4 flex flex-col items-center justify-center rounded-lg bg-white shadow-md">
          <h1 className="mt-4 text-2xl font-semibold text-principal-blue">
            List of products
          </h1>
          <div className="flex h-auto w-full justify-between">
            <p></p>
            <div className="flex items-center justify-center">
              <p className="font-semibold text-principal-blue">Amount:</p>
              <p className="ml-16 mr-8 font-semibold text-principal-blue">
                Price:
              </p>
            </div>
          </div>
          <div className={`h-auto rounded-md bg-transparent`}>
            {uniqueOrder?.orders?.map((order) => (
              <ItemsUniqueOrder
                key={order.id}
                name={order.title}
                img={order.image}
                price={order.price}
                amount={order.amount}
              />
            ))}
          </div>
          <div
            className="absolute left-2 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-principal-blue"
            onClick={() => navigate("/orders")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="rotate-180 fill-white"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
        </section>
        <section className="infoUniqueOrder mt-4 flex items-center justify-center rounded-lg">
          <div className="flex">
            <p className="mr-2 font-semibold">{`Total products: ${uniqueOrder.productsAmount}`}</p>
            <p className="font-semibold">{`Total price: $${uniqueOrder.maxPrice}`}</p>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

export default UniqueOrders;
