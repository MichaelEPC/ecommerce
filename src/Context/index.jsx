import React from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
