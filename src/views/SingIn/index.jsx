import React from "react";
import Nav from "./Components/Nav";
import FooterContainer from "../../Components/FooterContainer";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ManageUsers from "./ManageUsers";
import ManageCurrentUser from "./ManageCurrrentUser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const { users } = ManageUsers();
  const { updateCurrentUser } = ManageCurrentUser();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const notifyWarnings = () =>
    toast.warn("Something may be writen wrong", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.filter((user) => {
      if (email === user.email) {
        if (password === user.password) {
          return true;
        }
      }
    });
    if (user.length != 0) {
      updateCurrentUser(user[0]);
      navigate("/");
      return;
    }
    notifyWarnings();
  };
  return (
    <>
      <Nav />
      <main className="mainSingUp flex flex-col items-center">
        <form
          className="formSingIn mt-10 flex flex-col items-center rounded-lg border-2 border-ligh-gray bg-white shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold text-principal-blue">Sing In</h1>
          <div className="flex h-auto w-full flex-col items-center p-4">
            <div className="flex h-20 w-4/5 flex-col">
              <label className="ml-1 self-start font-semibold">Email:</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
              />
            </div>
            <div className="flex h-20 w-4/5 flex-col">
              <label className="ml-1 self-start font-semibold">Pasword:</label>
              <input
                type="password"
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
                className="h-8 rounded-lg border-2 border-principal-blue p-1 font-semibold text-text-color outline-principal-blue"
              />
            </div>
            <button
              className="h-auto w-40 rounded-lg bg-principal-blue p-2 text-lg font-semibold text-white"
              type="submit"
            >
              Sign in
            </button>
            <a
              className="mt-4 text-sm font-light text-principal-blue underline"
              href=""
            >
              Forgot password?
            </a>
          </div>
        </form>
        <article className="moreOptionsSignIn mt-10 flex items-center justify-center rounded-lg border-2 border-ligh-gray bg-white shadow-md">
          <p className="text-text-color">
            ¿Don´t have an account?
            <span
              className="ml-1 cursor-pointer font-semibold text-principal-blue underline"
              onClick={() => navigate("/signup")}
            >
              create one
            </span>
          </p>
        </article>
        <FooterContainer className="mt-5" />
      </main>
      <ToastContainer limit={3} />
    </>
  );
}

export default SignIn;
