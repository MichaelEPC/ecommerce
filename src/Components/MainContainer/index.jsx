import React from "react";
import "./style.css";

function MainContainer({ children }) {
  return (
    <main className="mainContainer showNav:left-24 relative left-0 top-0 flex flex-col items-center">
      {children}
    </main>
  );
}

export default MainContainer;
