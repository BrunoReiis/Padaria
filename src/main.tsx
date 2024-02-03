import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/NavBar.scss";
import "./css/global.scss";
import JS from "./JS.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <JS />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
