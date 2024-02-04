import NavBar from "./components/NavBar";
import ProductRow from "./components/ProductRow";
import SideBar from "./components/SideBar";

function App() {
  // #page_content e #products no "main.scss"
  const paes = {
    a: ["/mockup-01.avif", "PÃO FRANCÊS PACOTE COM 5 UNIDADES", "R$ 11,60"],
    b: ["/mockup-02.avif", "PÃO DE QUEIJO PEQUENO", "R$ 9,60"],
    c: ["/mockup-03.avif", "PÃO FRANCÊS COM REQUEIJÃO NA CHAPA", "R$ 12,90"],
  };
  const bebidas = {
    a: ["/mockup-11.avif", "REFRIGERANTE 2L", "R$ 22,50"],
    b: ["/mockup-12.avif", "REFRIGERANTE LATA", "R$ 8,90"],
    c: ["/mockup-13.avif", "SUCO NATURAL DE LARANJA", "R$ 16,90"],
    d: ["/mockup-14.avif", "ÁGUA COM GAS 500 ML", "R$ 6,00"],
    e: ["/mockup-14.avif", "ÁGUA SEM GAS 500 ML", "R$ 6,00"],
  };
  const doces = {
    a: ["/mockup-21.avif", "BANDEJA DE DOCE SIRIO", "R$ 22,90"],
    b: ["/mockup-22.avif", "DOCES SÍRIOS", "R$ 7,95"],
    c: ["/mockup-23.avif", "FROZEN CAFÉ GELADO", "R$ 12,90"],
    d: ["/mockup-24.avif", "FROZEN CAFÉ GELADO DUPLO", "R$ 18,90"],
    e: ["/mockup-25.avif", "HALAWI", "R$ 5,45"],
    f: ["/mockup-26.avif", "MALABIE", "R$ 21,90"],
    g: ["/mockup-27.avif", "PETIT GATEAU DE CHOCOLATE", "R$ 32,80"],
  };
  const bolos = {
    a: ["/mockup-31.avif", "BOLO DE CENOURA COM COBERTURA", "R$ 36,90"],
    b: ["/mockup-32.avif", "BOLO DE FUBÁ", "R$ 36,90"],
    c: ["/mockup-33.avif", "BOLO DE CHOCOLATE ESPECIAL", "R$ 44,90"],
    d: ["/mockup-34.avif", "BOLO DE LARANJA", "R$ 36,90"],
  };
  const pizzas = {
    a: ["/mockup-41.avif", "PIZZA CALABRESA C/MUSSARELA", "R$ 29,90"],
    b: ["/mockup-42.avif", "PIZZA MUSSARELA", "R$ 25,90"],
    c: ["/mockup-43.avif", "PIZZA FRANGO C/CATUPIRY", "R$ 29,90"],
    d: ["/mockup-44.avif", "PIZZA CALABRESA C/CATUPIRY", "R$ 29,90"],
  };
  return (
    <>
      <NavBar />
      <div id="page_content">
        <SideBar />
        <div id="products">
          <ProductRow title="Pães" content={paes} />
          <ProductRow title="Bebidas" content={bebidas} />
          <ProductRow title="Doces" content={doces} />
          <ProductRow title="Bolos" content={bolos} />
          <ProductRow title="Pizzas" content={pizzas} />
        </div>
      </div>
    </>
  );
}

export default App;
