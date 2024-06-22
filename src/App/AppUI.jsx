import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../views/Home/index";
import Cart from "../views/Cart";
import Orders from "../views/Orders";
import UniqueOrders from "../views/UniqueOrder";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/orders", element: <Orders /> },
    { path: "/order/:id", element: <UniqueOrders /> },
    { path: "TechIn/", element: <Orders /> },
  ]);
  return routes;
};

function AppUI() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default AppUI;
