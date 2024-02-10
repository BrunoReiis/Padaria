import CartProducts from "../components/CartProducts";
import CartPrices from "../components/CartPrices";

import { useEffect } from "react";
import CartActions from "../scripts/CartActions";
import CartPrice from "../scripts/CartPrice";
import NavBarJS from "../scripts/NavBar";

function Cart() {
  useEffect(() => {
    NavBarJS();
    CartActions();
    CartPrice();
  }, []);

  let products: string[][] = [];
  Object.keys(sessionStorage).forEach((productKey) => {
    const product = sessionStorage.getItem(productKey)?.split(",");
    if (product) {
      products.push(product);
    }
  });

  return (
    <>
      <div id="page_content">
        <CartProducts content={products} />
        <CartPrices />
      </div>
    </>
  );
}

export default Cart;
