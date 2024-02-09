import NavBar from "./components/NavBar";
import ProductRow from "./components/ProductRow";
import SideBar from "./components/SideBar";

function App() {
  // #page_content e #products no "main.scss"
  const paes = [
    ["R$ 11,60", "/mockup-01.avif", "PÃO FRANCÊS PACOTE", "5 Unidades"],
    ["R$ 9,60", "/mockup-02.avif", "PÃO DE QUEIJO PEQUENO"],
    ["R$ 12,90", "/mockup-03.avif", "PÃO FRANCÊS COM REQUEIJÃO NA CHAPA"],
  ];
  const bebidas = [
    ["R$ 22,50", "/mockup-11.avif", "REFRIGERANTE GARRAFA", "2 Litros"],
    ["R$ 8,90", "/mockup-12.avif", "REFRIGERANTE LATA", "330 ml"],
    ["R$ 16,90", "/mockup-13.avif", "SUCO NATURAL DE LARANJA", "300 ml"],
    ["R$ 6,00", "/mockup-14.avif", "ÁGUA COM GAS", "500 ml"],
    ["R$ 6,00", "/mockup-14.avif", "ÁGUA SEM GAS", "500 ml"],
  ];
  const doces = [
    ["R$ 22,90", "/mockup-21.avif", "BANDEJA DE DOCE SIRIO", "5 unidades"],
    ["R$ 7,95", "/mockup-22.avif", "DOCES SÍRIOS"],
    ["R$ 12,90", "/mockup-23.avif", "FROZEN CAFÉ GELADO", "120 ml"],
    ["R$ 18,90", "/mockup-24.avif", "FROZEN CAFÉ GELADO DUPLO", "220 ml"],
    ["R$ 5,45", "/mockup-25.avif", "HALAWI"],
    ["R$ 21,90", "/mockup-26.avif", "MALABIE"],
    ["R$ 32,80", "/mockup-27.avif", "PETIT GATEAU DE CHOCOLATE", "3 unidades"],
  ];
  const bolos = [
    ["R$ 36,90", "/mockup-31.avif", "BOLO DE CENOURA COM COBERTURA"],
    ["R$ 36,90", "/mockup-32.avif", "BOLO DE FUBÁ"],
    ["R$ 44,90", "/mockup-33.avif", "BOLO DE CHOCOLATE ESPECIAL"],
    ["R$ 36,90", "/mockup-34.avif", "BOLO DE LARANJA"],
  ];
  const pizzas = [
    [
      "R$ 29,90",
      "/mockup-41.avif",
      "PIZZA CALABRESA C/MUSSARELA",
      "Pizza Grande",
    ],
    ["R$ 25,90", "/mockup-42.avif", "PIZZA MUSSARELA", "Pizza Grande"],
    ["R$ 29,90", "/mockup-43.avif", "PIZZA FRANGO C/CATUPIRY", "Pizza Grande"],
    [
      "R$ 29,90",
      "/mockup-44.avif",
      "PIZZA CALABRESA C/CATUPIRY",
      "Pizza Grande",
    ],
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
