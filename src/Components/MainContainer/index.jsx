import React from "react";
import "./style.css";

function MainContainer({ children }) {
  return (
    <main className="mainContainer relative left-24 top-0 flex flex-col items-center">
      {children}
    </main>
  );
}

export default MainContainer;
