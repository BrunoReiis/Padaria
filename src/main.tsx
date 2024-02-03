import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import JS from "./JS.tsx";

import "./css/global.scss";
import "./css/main.scss";
import "./css/NavBar.scss";
import "./css/SideBar.scss";
import "./css/ProductRow.scss";
import "./css/Card.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <JS />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
