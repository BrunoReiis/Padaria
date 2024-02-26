import Cart_Products from "../components/Cart/Products";
import Cart_Prices from "../components/Cart/Prices";
import { useEffect } from "react";
import CartActions from "../scripts/CartActions";
import CartPrice from "../scripts/CartPrice";
function Cart() {
  useEffect(() => {
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
        <Cart_Products content={products} />
        <Cart_Prices />
      </div>
    </>
  );
}
export default Cart;
