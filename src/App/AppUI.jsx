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
    { path: "/ecomerce-tech", element: <Home /> },
    { path: "/ecomerce-tech/signin", element: <SignIn /> },
    { path: "/ecomerce-tech/signup", element: <Singup /> },
    { path: "/ecomerce-tech/cart", element: <Cart /> },
    { path: "/ecomerce-tech/orders", element: <Orders /> },
    { path: "/ecomerce-tech/order/:id", element: <UniqueOrders /> },
    {
      path: "/ecomerce-tech/account-configuration",
      element: <ConfigAccount />,
    },
    { path: "/ecomerce-tech/product-detail/:id", element: <ProductDetail /> },
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
