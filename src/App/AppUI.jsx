import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../views/Home/index";
import Cart from "../views/Cart";
import Orders from "../views/Orders";
import UniqueOrders from "../views/UniqueOrder";
import SignIn from "../views/SingIn";
import Singup from "../views/SingUp";
import ConfigAccount from "../views/ConfigAccount";
import ProductDetail from "../views/ProductDetail";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <Singup /> },
    { path: "/cart", element: <Cart /> },
    { path: "/orders", element: <Orders /> },
    { path: "/order/:id", element: <UniqueOrders /> },
    {
      path: "/account-configuration",
      element: <ConfigAccount />,
    },
    { path: "/product-detail/:id", element: <ProductDetail /> },
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
