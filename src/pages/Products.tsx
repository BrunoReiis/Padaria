import Home_ProductRow from "../components/Products/ProductRow";
import Home_SideBar from "../components/Products/SideBar";
import { useEffect } from "react";
import ProductsJS from "../scripts/ProductsJS";

interface TestType {
  [key: string]: {
    id: number;
    price: string;
    image: string;
    title: string;
    description?: string;
  }[];
}

function Products() {
  useEffect(() => {
    ProductsJS();
  }, []);

  const test: TestType = {
    "Test Row 1": [
      {
        id: 1,
        price: "R$ 11,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
      {
        id: 2,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
      },
      {
        id: 3,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
      },
    ],
    "Test Row 2": [
      {
        id: 1,
        price: "R$ 11,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
      {
        id: 2,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
      {
        id: 3,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
      {
        id: 4,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
      {
        id: 5,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
    ],
    "Test Row 3": [
      {
        id: 1,
        price: "R$ 11,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
      {
        id: 2,
        price: "R$ 9,60",
        image: "/img/mockup.png",
        title: "Item Title",
        description: "Description",
      },
    ],
  };

  return (
    <>
      <div id="page_content">
        <Home_SideBar titles={Object.keys(test)} />
        <div id="products">
          {Object.keys(test).map((key: any, index) => (
            <Home_ProductRow key={index} title={key} content={test[key]} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
