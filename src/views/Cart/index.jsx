import React from "react";
import HeaderContainer from "../../Components/HeaderContainer";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import "./style.css";

function Cart() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Nav />
      <MainContainer>
        <section className="cartContainer mt-2 flex">
          <div className="OrderContainer flex flex-col rounded-lg border-2 border-ligh-gray bg-white shadow-md">
            <p className="text-2xl font-bold text-principal-blue">Your Cart</p>
            <p className="self-end text-2xl font-bold text-principal-blue">
              Price
            </p>
            <p>hola</p>
          </div>
          <div className="flex h-auto flex-col items-center"></div>
        </section>
      </MainContainer>
    </>
  );
}

export default Cart;
