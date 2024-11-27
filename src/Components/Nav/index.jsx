import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
import { AppContext } from "../../Context";
import ManageCurrentUser from "../../views/SingIn/ManageCurrrentUser";
import ManageCart from "../../views/Cart/ManageCart";

function Nav() {
  const [navIsOpen, setNavIsOpen] = React.useState(false);
  const [rotateButton, setRotateButton] = React.useState("rotate-90");
  const { currentPage, setCurrentPage } = React.useContext(AppContext);
  const { currentUser, updateCurrentUser } = ManageCurrentUser();
  const { cart } = ManageCart();

  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    if (navIsOpen) {
      setNavIsOpen(!navIsOpen);
    }
  };

  const toggleNavButton = () => {
    setNavIsOpen(!navIsOpen);
  };

  const rotateBut = () => {
    setTimeout(() => {
      if (rotateButton === "rotate-90") {
        setRotateButton("-rotate-90");
      } else {
        setRotateButton("rotate-90");
      }
    }, 100);
  };

  const logOut = async () => {
    await updateCurrentUser({});
    navigate("/signin");
  };

  const verifyCurrentPage = () => {
    switch (location.pathname) {
      case "/":
        setCurrentPage(1);
        break;

      case "/cart":
        setCurrentPage(2);
        break;

      case "/orders":
        setCurrentPage(3);
        break;

      case "/account-configuration":
        setCurrentPage(4);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    verifyCurrentPage();
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 z-20 hidden flex-col rounded-lg border-r-2 border-ligh-gray bg-white transition-all duration-200 showNav:flex ${navIsOpen ? "navbar" : "close"}`}
      >
        <div>
          <div
            className={`flex items-center rounded-lg bg-white p-1 ${navIsOpen ? "navbarHead" : "closeHeader"}`}
          >
            <div
              className={`flex w-24 flex-col items-center justify-center rounded-lg bg-principal-blue transition-all duration-150 ${navIsOpen ? "h-20" : "h-16"}`}
            >
              <p className="text-3xl font-bold text-white">TI</p>
            </div>
            <div
              className={`${navIsOpen ? "ml-6 mt-2 flex items-center justify-center" : "hidden"}`}
            >
              <p
                className={`transition-all duration-100 ${navIsOpen ? "text-2xl font-semibold text-text-color" : "w-0"}`}
              >
                Tech Inc
              </p>
            </div>
          </div>

          <ul>
            <li
              className={`NavItems border-t-2 border-ligh-gray ${currentPage == 1 ? "NavitemsActive" : ""}`}
              onClick={() => {
                toggleNav();
                navigate("/");
              }}
            >
              <div className="NavIconDiv flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="NavIcon transition-all duration-300"
                >
                  <path d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path>
                </svg>
              </div>
              <div
                className={`transition-all duration-150 ${navIsOpen ? "NavItemsText" : "closeItems"}`}
              >
                <p
                  className={`textNavItems transition-all duration-150 ${navIsOpen ? "NavItemsText" : "hidden"}`}
                >
                  Home
                </p>
              </div>
            </li>
            <li
              className={`NavItems ${currentPage == 2 ? "NavitemsActive" : ""}`}
              onClick={() => {
                toggleNav();
                navigate("/cart");
              }}
            >
              <div className="NavIconDiv relative flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="NavIcon transition-all duration-300"
                >
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
              </div>
              <div>
                <p
                  className={`textNavItems transition-all duration-150 ${navIsOpen ? "NavItemsText" : "hidden"}`}
                >
                  Cart
                </p>
              </div>
              <div className="absolute right-2 top-36 flex h-6 w-6 items-center justify-center rounded-full border-2 border-text-color bg-white p-1">
                <p id="itemsCart" className="font-semibold">
                  {cart?.length}
                </p>
              </div>
            </li>
            <li
              className={`NavItems ${currentPage == 3 ? "NavitemsActive" : ""}`}
              onClick={() => {
                toggleNav();
                navigate("/orders");
              }}
            >
              <div className="NavIconDiv flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="NavIcon transition-all duration-300"
                >
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8l8-8V5a2 2 0 0 0-2-2zm-7 16v-7h7l-7 7z"></path>
                </svg>
              </div>
              <div>
                <p
                  className={`textNavItems transition-all duration-150 ${navIsOpen ? "NavItemsText" : "hidden"}`}
                >
                  Orders
                </p>
              </div>
            </li>
          </ul>
        </div>

        <ul className="absolute bottom-1 mb-1 flex w-full flex-col">
          <li
            className={`NavItems flex items-center ${currentPage == 4 ? "NavitemsActive" : ""}`}
            onClick={() => {
              toggleNav();
              if ("email" in currentUser) {
                navigate("/account-configuration");
              } else {
                navigate("/signin");
              }
            }}
          >
            <div className="NavIconDiv flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="NavIcon transition-all duration-300"
              >
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <p
                className={`textNavItems transition-all duration-150 ${navIsOpen ? "NavItemsText" : "hidden"}`}
              >
                User
              </p>
            </div>
          </li>
          <li
            className={`NavItemsLogOut flex items-center ${currentPage == 5 ? "NavitemsActive" : ""}`}
            onClick={() => {
              toggleNav();
              logOut();
            }}
          >
            <div className="NavIconDiv flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="NavIcon transition-all duration-300"
              >
                <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"></path>
                <path d="M11 2h2v10h-2z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <p
                className={`textNavItems transition-all duration-150 ${navIsOpen ? "NavItemsText" : "hidden"}`}
              >
                Log out
              </p>
            </div>
          </li>
        </ul>

        <div
          className={`absolute top-96 flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full bg-principal-blue transition-all duration-150 ${navIsOpen ? "left-56" : "left-20"} `}
          onClick={() => {
            toggleNavButton();
          }}
        >
          <svg
            onClick={() => {
              rotateBut();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`transform fill-white ${rotateButton}`}
          >
            <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h5v-2H4V7h16v12h-5v2h5c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
            <path d="M13 21v-5h3l-4-5-4 5h3v5z"></path>
          </svg>
        </div>
      </nav>
    </>
  );
}

export default Nav;
