import { useEffect, useState } from "react";
import Home_ProductRow from "../components/Products/ProductRow";
import Home_SideBar from "../components/Products/SideBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../scripts/db/Config";

interface TestType {
  id: number;
  price: string;
  image: string;
  title: string;
  description?: string;
}

function Products() {
  const [items, setItems] = useState<{ [key: string]: TestType[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const data: { [key: string]: TestType[] } = {};
        querySnapshot.forEach((doc) => {
          const categoryData = doc.data();
          data[doc.id] = categoryData.items;
        });
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="page_content">
        <Home_SideBar titles={Object.keys(items)} />
        <div id="products">
          {Object.entries(items).map(([key, value]) => (
            <Home_ProductRow key={key} title={key} content={value} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
