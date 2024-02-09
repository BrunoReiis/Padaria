import { useEffect } from "react";
import CartPrice from "../scripts/CartPrice";
import NavBar from "../scripts/NavBar";

function CartJS() {
  useEffect(() => {
    NavBar();
    CartPrice();
  }, []);
  return null;
}

export default CartJS;
