import NavBar from "./components/NavBar";
import CartProducts from "./components/CartProducts";
import CartPrices from "./components/CartPrices";

function App2() {
  let products: string[][] = [];
  Object.keys(sessionStorage).forEach((productKey) => {
    const product = sessionStorage.getItem(productKey)?.split(",");
    if (product) {
      products.push(product);
    }
  });

  return (
    <>
      <NavBar />
      <div id="page_content">
        <CartProducts content={products} />
        <CartPrices />
      </div>
    </>
  );
}

export default App2;
