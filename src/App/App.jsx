import AppUI from "./AppUI";
import { AppProvider } from "../Context/index";
import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <AppUI></AppUI>
      </AppProvider>
    </>
  );
}

export default App;
