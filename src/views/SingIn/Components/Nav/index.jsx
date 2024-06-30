import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <header className="h-20 w-full items-center justify-between border-2 border-ligh-gray bg-white shadow-md">
      <nav className="flex h-full items-center justify-between">
        <div className="ml-2 flex h-12 w-14 cursor-pointer items-center justify-center rounded-lg bg-principal-blue">
          <p
            className="text-lg font-bold text-white"
            onClick={() => navigate("/")}
          >
            TI
          </p>
        </div>
        <ul className="flex items-center justify-between">
          <li
            className="mr-4 cursor-pointer font-semibold text-text-color"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="mr-2 cursor-pointer font-semibold text-text-color"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
