import { useEffect } from "react";
import CartPrice from "../scripts/CartPrice";
import NavBar from "../scripts/NavBar";
import CartActions from "../scripts/CartActions";

function CartJS() {
  useEffect(() => {
    NavBar();
    CartActions();
    CartPrice();
  }, []);
  return null;
}

export default CartJS;
