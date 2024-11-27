import AppUI from "./AppUI";
import { AppProvider } from "../Context/index";

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
