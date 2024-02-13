import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./css/Cart - Card.scss";
import "./css/Cart - Prices.scss";
import "./css/Cart - Products.scss";
import "./css/Contact - Main.scss";
import "./css/global.scss";
import "./css/Home - Main.scss";
import "./css/main.scss";
import "./css/NavBar.scss";
import "./css/Products - Card.scss";
import "./css/Products - Main.scss";
import "./css/Products - ProductRow.scss";
import "./css/Products - SideBar.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
