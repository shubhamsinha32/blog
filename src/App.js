import logo from "./logo.svg";
import "./Assets/style.css";
import "./Assets/responsive.css";
import { BrowserRouter } from "react-router-dom";
import Root from "./Router";


function App() {
  return (
    <>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </>
  );
}

export default App;
