import NavBar from "./components/NavBar";
import ProductRow from "./components/ProductRow";
import SideBar from "./components/SideBar";

function App() {
  // #page_content e #products no "main.scss"
  const paes = [
    ["/mockup-01.avif", "PÃO FRANCÊS PACOTE COM 5 UNIDADES", "R$ 11,60"],
    ["/mockup-02.avif", "PÃO DE QUEIJO PEQUENO", "R$ 9,60"],
    ["/mockup-03.avif", "PÃO FRANCÊS COM REQUEIJÃO NA CHAPA", "R$ 12,90"],
  ];
  const bebidas = [
    ["/mockup-11.avif", "REFRIGERANTE 2L", "R$ 22,50"],
    ["/mockup-12.avif", "REFRIGERANTE LATA", "R$ 8,90"],
    ["/mockup-13.avif", "SUCO NATURAL DE LARANJA", "R$ 16,90"],
    ["/mockup-14.avif", "ÁGUA COM GAS 500 ML", "R$ 6,00"],
    ["/mockup-14.avif", "ÁGUA SEM GAS 500 ML", "R$ 6,00"],
  ];
  const doces = [
    ["/mockup-21.avif", "BANDEJA DE DOCE SIRIO", "R$ 22,90"],
    ["/mockup-22.avif", "DOCES SÍRIOS", "R$ 7,95"],
    ["/mockup-23.avif", "FROZEN CAFÉ GELADO", "R$ 12,90"],
    ["/mockup-24.avif", "FROZEN CAFÉ GELADO DUPLO", "R$ 18,90"],
    ["/mockup-25.avif", "HALAWI", "R$ 5,45"],
    ["/mockup-26.avif", "MALABIE", "R$ 21,90"],
    ["/mockup-27.avif", "PETIT GATEAU DE CHOCOLATE", "R$ 32,80"],
  ];
  const bolos = [
    ["/mockup-31.avif", "BOLO DE CENOURA COM COBERTURA", "R$ 36,90"],
    ["/mockup-32.avif", "BOLO DE FUBÁ", "R$ 36,90"],
    ["/mockup-33.avif", "BOLO DE CHOCOLATE ESPECIAL", "R$ 44,90"],
    ["/mockup-34.avif", "BOLO DE LARANJA", "R$ 36,90"],
  ];
  const pizzas = [
    ["/mockup-41.avif", "PIZZA CALABRESA C/MUSSARELA", "R$ 29,90"],
    ["/mockup-42.avif", "PIZZA MUSSARELA", "R$ 25,90"],
    ["/mockup-43.avif", "PIZZA FRANGO C/CATUPIRY", "R$ 29,90"],
    ["/mockup-44.avif", "PIZZA CALABRESA C/CATUPIRY", "R$ 29,90"],
  ];
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
