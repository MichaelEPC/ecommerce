import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../views/Home/index";
import Cart from "../views/Cart";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "TechIn/", element: "" },
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
