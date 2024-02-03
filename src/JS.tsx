import { useEffect } from "react";
import NavBar from "./scripts/NavBar.js";
import ProductRow from "./scripts/ProductRow.js";

function JS() {
  useEffect(() => {
    ProductRow();
    NavBar();
  }, []);
  return null;
}

export default JS;
