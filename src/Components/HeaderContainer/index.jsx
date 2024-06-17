import React from "react";
import "./style.css";

function HeaderContainer({ title, children }) {
  return (
    <header className="relative left-24 top-0 flex flex-col items-center justify-center">
      {children}
    </header>
  );
}

export default HeaderContainer;
