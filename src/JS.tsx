import { useEffect } from "react";
import NavBar from "./scripts/NavBar.js";

function JS() {
  useEffect(() => {
    NavBar();
  }, []);
  return null;
}

export default JS;
