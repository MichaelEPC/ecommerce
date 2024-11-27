import React, { useEffect } from "react";
import HeaderContainer from "../../Components/HeaderContainer";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import FooterContainer from "../../Components/FooterContainer";
import NavMobile from "../../Components/NavMobile";
import "./style.css";
import ManageCurrentUser from "../SingIn/ManageCurrrentUser";
import ManageUsers from "../SingIn/ManageUsers";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ConfigAccount() {
  const { currentUser, updateCurrentUser } = ManageCurrentUser();
  const { users, updateUsers } = ManageUsers();
  const [passVisible, setPassVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate();

  const notifySucessfull = (message) =>
    toast.success(message, {
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

  const notifyWarnings = (message) =>
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const logOut = async () => {
    await updateCurrentUser({});
    navigate("/ecomerce-tech/signin");
  };

  const deleteAccount = async () => {
    const newListUsers = users.filter((user) => user.id != currentUser.id);
    await updateCurrentUser({});
    await updateUsers(newListUsers);
    navigate("/ecomerce-tech/signin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.elements.name.value;
    let adress = e.target.elements.adress.value;
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    let confirmPassword = e.target.elements.confirmPassword.value;
    let cellPhone = e.target.elements.cellphone.value;
    if (
      userName == "" ||
      adress == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      notifyWarnings("Fill the form");
      return;
    }
    if (password !== confirmPassword) {
      return notifyWarnings("The two passwords doesnt match");
    }
    const modListUsers = users.filter((user) => {
      if (user.id === currentUser.id) {
        user.name = userName;
        user.adress = adress;
        user.email = email;
        user.password = password;
        user.number = cellPhone;
        updateCurrentUser(user);
      }
      return true;
    });
    updateUsers(modListUsers);
    notifySucessfull("Changes sucessfully made");
  };

  const toggleVisible = () => setPassVisible(!passVisible);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <>
      <HeaderContainer />
      <Nav />
      <NavMobile />
      <MainContainer>
        <section className="mt-14 flex h-full w-3/6 flex-col items-center justify-around 2xl:flex-row">
          <div className="infoAccount mt-4 flex flex-col items-center rounded-lg bg-white shadow-md ring-4 ring-ligh-gray 2xl:mr-10">
            <div className="flex w-full flex-col items-center justify-center border-b-2 border-ligh-gray">
              <p className="text-lg font-semibold text-text-color">
                Welcome
                <span className="text-principal-blue">{` ${currentUser.name} `}</span>
                to
              </p>
              <p className="text-lg font-semibold text-text-color">{`settings account`}</p>
            </div>
            <div className="mt-10 flex items-center">
              <button
                className="bg-red mr-2 h-10 w-28 rounded-lg bg-red-500 p-2 font-semibold text-white"
                onClick={() => logOut()}
              >
                Log out
              </button>
              <button
                className="rounded-lg bg-red-500 p-2 font-semibold text-white"
                onClick={() => deleteAccount()}
              >
                Delete account
              </button>
            </div>
          </div>
          <form
            className="editAccountForm relative mt-4 flex flex-col items-center rounded-lg border-2 border-ligh-gray bg-white shadow-md"
            onSubmit={handleSubmit}
          >
            <p className="mt-2 text-lg font-semibold">Edit Account</p>
            <div
              className={`${!loading ? "mt-5 flex w-4/5 items-center justify-between" : "hidden"}`}
            >
              <div className="mr-2 flex h-16 w-3/6 flex-col">
                <label className="font-semibold">Name:</label>
                <input
                  className="mt-1 h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
                  type="text"
                  defaultValue={currentUser.name}
                  name="name"
                />
              </div>
              <div className="flex h-16 w-3/6 flex-col">
                <label className="font-semibold">Adress:</label>
                <input
                  className="mt-1 h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
                  type="text"
                  defaultValue={currentUser.adress}
                  name="adress"
                />
              </div>
            </div>
            <div
              className={`${!loading ? "mt-5 flex w-4/5 items-center justify-between" : "hidden"}`}
            >
              <div className="mr-2 flex h-16 w-3/6 flex-col">
                <label className="font-semibold">Email:</label>
                <input
                  className="mt-1 h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
                  type="email"
                  defaultValue={currentUser.email}
                  name="email"
                />
              </div>
              <div className="flex h-16 w-3/6 flex-col">
                <label className="font-semibold">Password:</label>
                <input
                  className="mt-1 h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
                  type={`${!passVisible ? "password" : "text"}`}
                  defaultValue={currentUser.password}
                  name="password"
                />
              </div>
            </div>
            <div
              className={`${!loading ? "mt-5 flex w-4/5 items-center justify-between" : "hidden"}`}
            >
              <div className="mr-2 flex h-16 w-3/6 flex-col">
                <label className="font-semibold">Cell phone:</label>
                <input
                  className="mt-1 h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
                  type="number"
                  defaultValue={currentUser.number}
                  name="cellphone"
                />
              </div>
              <div className="flex h-16 w-3/6 flex-col">
                <label className="font-semibold">Confirm Password:</label>
                <input
                  className="mt-1 h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
                  type={`${!passVisible ? "password" : "text"}`}
                  defaultValue={currentUser.password}
                  name="confirmPassword"
                />
              </div>
            </div>
            <div
              className={`iconVisibility absolute right-4 cursor-pointer rounded-lg border-2 border-ligh-gray p-1 transition-all duration-150 ${passVisible ? "border-white bg-principal-blue fill-white" : ""}`}
              onClick={() => toggleVisible()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12zm9.247 4.907-7.48-7.481a8.138 8.138 0 0 1 1.188-.982l8.055 8.054a8.835 8.835 0 0 1-1.763.409zm3.648-1.352-1.541-1.541c.354-.596.572-1.28.572-2.015 0-.474-.099-.924-.255-1.349A.983.983 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.292 9.292 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.573 8.573 0 0 1-2.957 3.557z"></path>
              </svg>
            </div>
            <button
              className="mt-10 rounded-lg bg-green-400 p-4 font-semibold text-white"
              type="submit"
            >
              Change information
            </button>
          </form>
        </section>
      </MainContainer>
      <section className="FooterContainer relative left-0 ml-4 flex items-center justify-center showNav:left-16">
        <FooterContainer />
      </section>
      <ToastContainer limit={3} />
    </>
  );
}

export default ConfigAccount;
