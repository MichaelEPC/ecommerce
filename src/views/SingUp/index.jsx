import React from "react";
import FooterContainer from "../../Components/FooterContainer";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ManageUsers from "../SingIn/ManageUsers";

function Singup() {
  const { users, updateUsers } = ManageUsers();
  const [name, setName] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cellphone, setCellphone] = React.useState(0);

  const navigate = useNavigate();
  const newID = () => Date.now();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      adress === "" ||
      email === "" ||
      password === "" ||
      cellphone === ""
    ) {
      return "Fill all the camps of the forms";
    }
    for (const user of users) {
      if (user.email === email) {
        console.log(user);
        return "Already registred email, try other";
      }
    }
    const userList = [
      ...users,
      {
        id: newID(),
        name: name,
        adress: adress,
        email: email,
        password: password,
        number: cellphone,
        onCart: [],
        orders: [],
      },
    ];
    await updateUsers(userList);
    navigate("/signin");
  };
  return (
    <>
      <main className="flex h-4/5 w-full flex-col items-center">
        <section className="containerSingIn m-12 flex flex-col items-center rounded-lg border-2 border-ligh-gray bg-white shadow-md">
          <div
            className="mt-2 flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg bg-principal-blue"
            onClick={() => navigate("/signin")}
          >
            <p className="cursor-default text-2xl font-bold text-white">TI</p>
          </div>
          <h1 className="mt-2 text-xl font-semibold text-text-color">
            Create account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 flex flex-col">
              <label className="font-medium">Full Name:</label>
              <input
                className="h-8 w-64 rounded-md border-2 border-ligh-gray p-1 outline-principal-blue"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="font-medium">Adress:</label>
              <input
                className="h-8 w-64 rounded-md border-2 border-ligh-gray p-1 outline-principal-blue"
                type="text"
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="font-medium">Email:</label>
              <input
                className="h-8 w-64 rounded-md border-2 border-ligh-gray p-1 outline-principal-blue"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="font-medium">Password:</label>
              <input
                className="h-8 w-64 rounded-md border-2 border-ligh-gray p-1 outline-principal-blue"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="font-medium">Cell phone number:</label>
              <input
                className="h-8 w-64 rounded-md border-2 border-ligh-gray p-1 outline-principal-blue"
                type="number"
                onChange={(e) => setCellphone(e.target.value)}
              />
            </div>
            <div className="mt-4 flex h-12 w-full items-center justify-center">
              <button
                className="h-full w-40 rounded-lg bg-principal-blue font-bold text-white"
                type="submit"
              >
                Create account
              </button>
            </div>
          </form>
        </section>
      </main>
      <section className="flex items-center justify-center">
        <FooterContainer />
      </section>
    </>
  );
}

export default Singup;
