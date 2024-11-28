import "./style.css";

function HeaderContainer({ children }) {
  return (
    <header className="relative left-0 top-2 flex flex-col items-center justify-center showNav:left-24">
      <h1 className="titleHeader absolute text-2xl font-semibold text-text-color underline">
        Tech Inc
      </h1>
      <p className="titleContact absolute right-4 mr-4 cursor-pointer text-lg font-semibold text-text-color">
        Contact
      </p>
      {children}
    </header>
  );
}

export default HeaderContainer;
