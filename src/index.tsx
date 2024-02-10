import ReactDOM from "react-dom/client";

import App from "./pages/App.tsx";

import "./css/Card.scss";
import "./css/CartCard.scss";
import "./css/CartPrices.scss";
import "./css/CartProducts.scss";
import "./css/global.scss";
import "./css/main.scss";
import "./css/NavBar.scss";
import "./css/ProductRow.scss";
import "./css/SideBar.scss";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
