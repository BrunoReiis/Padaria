import React from "react";
import ReactDOM from "react-dom/client";

import CartJS from "./JS/CartJS.tsx";

import "./css/global.scss";
import "./css/main.scss";
import "./css/NavBar.scss";
import "./css/CartCard.scss";
import "./css/CartProducts.scss";
import "./css/CartPrices.scss";

import App2 from "./App2.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <CartJS />
    <React.StrictMode>
      <App2 />
    </React.StrictMode>
  </>
);
