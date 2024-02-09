import { useEffect } from "react";
import NavBar from "./scripts/NavBar.js";
import AddToCart from "./scripts/AddToCart.js";

function JS() {
  useEffect(() => {
    AddToCart();
    NavBar();
  }, []);
  return null;
}

export default JS;
