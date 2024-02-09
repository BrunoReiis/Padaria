import NavBar from "./components/NavBar";
import CartProducts from "./components/CartProducts";
import CartPrices from "./components/CartPrices";

function App2() {
  const paes = [
    ["R$ 11,60", "/img/mockup-01.avif", "PÃO FRANCÊS PACOTE", "5 Unidades"],
    ["R$ 9,60", "/img/mockup-02.avif", "PÃO DE QUEIJO PEQUENO"],
    ["R$ 12,90", "/img/mockup-03.avif", "PÃO FRANCÊS COM REQUEIJÃO NA CHAPA"],
  ];
  return (
    <>
      <NavBar />
      <div id="page_content">
        <CartProducts content={paes} />
        <CartPrices />
      </div>
    </>
  );
}

export default App2;
