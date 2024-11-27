import React from "react";
import "./style.css";

function MainContainer({ children }) {
  return (
    <main className="mainContainer relative left-0 top-0 flex flex-col items-center showNav:left-24">
      {children}
    </main>
  );
}

export default MainContainer;
