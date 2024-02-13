import Home_ProductRow from "../components/Products/ProductRow";
import Home_SideBar from "../components/Products/SideBar";
import { useEffect } from "react";
import AddToCart from "../scripts/AddToCart";
import NavBarJS from "../scripts/NavBar";

function Products() {
  useEffect(() => {
    AddToCart();
    NavBarJS();
  }, []);
  const paes = [
    ["R$ 11,60", "/img/mockup-01.avif", "PÃO FRANCÊS PACOTE", "5 Unidades"],
    ["R$ 9,60", "/img/mockup-02.avif", "PÃO DE QUEIJO PEQUENO"],
    ["R$ 12,90", "/img/mockup-03.avif", "PÃO FRANCÊS COM REQUEIJÃO NA CHAPA"],
  ];
  const bebidas = [
    ["R$ 22,50", "/img/mockup-11.avif", "REFRIGERANTE GARRAFA", "2 Litros"],
    ["R$ 8,90", "/img/mockup-12.avif", "REFRIGERANTE LATA", "330 ml"],
    ["R$ 16,90", "/img/mockup-13.avif", "SUCO NATURAL DE LARANJA", "300 ml"],
    ["R$ 6,00", "/img/mockup-14.avif", "ÁGUA COM GAS", "500 ml"],
    ["R$ 6,00", "/img/mockup-14.avif", "ÁGUA SEM GAS", "500 ml"],
  ];
  const doces = [
    ["R$ 22,90", "/img/mockup-21.avif", "BANDEJA DE DOCE SIRIO", "5 unidades"],
    ["R$ 7,95", "/img/mockup-22.avif", "DOCES SÍRIOS"],
    ["R$ 12,90", "/img/mockup-23.avif", "FROZEN CAFÉ GELADO", "120 ml"],
    ["R$ 18,90", "/img/mockup-24.avif", "FROZEN CAFÉ GELADO DUPLO", "220 ml"],
    ["R$ 5,45", "/img/mockup-25.avif", "HALAWI"],
    ["R$ 21,90", "/img/mockup-26.avif", "MALABIE"],
    [
      "R$ 32,80",
      "/img/mockup-27.avif",
      "PETIT GATEAU DE CHOCOLATE",
      "3 unidades",
    ],
  ];
  const bolos = [
    ["R$ 36,90", "/img/mockup-31.avif", "BOLO DE CENOURA COM COBERTURA"],
    ["R$ 36,90", "/img/mockup-32.avif", "BOLO DE FUBÁ"],
    ["R$ 44,90", "/img/mockup-33.avif", "BOLO DE CHOCOLATE ESPECIAL"],
    ["R$ 36,90", "/img/mockup-34.avif", "BOLO DE LARANJA"],
  ];
  const pizzas = [
    [
      "R$ 29,90",
      "/img/mockup-41.avif",
      "PIZZA CALABRESA C/MUSSARELA",
      "Pizza Grande",
    ],
    ["R$ 25,90", "/img/mockup-42.avif", "PIZZA MUSSARELA", "Pizza Grande"],
    [
      "R$ 29,90",
      "/img/mockup-43.avif",
      "PIZZA FRANGO C/CATUPIRY",
      "Pizza Grande",
    ],
    [
      "R$ 29,90",
      "/img/mockup-44.avif",
      "PIZZA CALABRESA C/CATUPIRY",
      "Pizza Grande",
    ],
  ];
  return (
    <>
      <div id="page_content">
        <Home_SideBar />
        <div id="products">
          <Home_ProductRow title="Pães" content={paes} />
          <Home_ProductRow title="Bebidas" content={bebidas} />
          <Home_ProductRow title="Doces" content={doces} />
          <Home_ProductRow title="Bolos" content={bolos} />
          <Home_ProductRow title="Pizzas" content={pizzas} />
        </div>
      </div>
    </>
  );
}

export default Products;
