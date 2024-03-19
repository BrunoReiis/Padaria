import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../scripts/db/Config";

const TestDb = () => {
  const enviarDados = async () => {
    const categoriesRef = collection(db, "categories");

    await setDoc(doc(categoriesRef, "TASDASDA"), {
      items: [
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
    });

    await setDoc(doc(categoriesRef, "Test Row 5"), {
      items: [
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
    });

    await setDoc(doc(categoriesRef, "Teste"), {
      items: [
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
    });
  };

  interface ItemType {
    id: number;
    price: string;
    image: string;
    title: string;
    description?: string;
  }
  
  const puxarDados = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    querySnapshot.forEach((doc) => {
  
      const items: ItemType[] = doc.data().items; 
      if (items) {
        items.forEach((item: ItemType) => {
          console.log("Item ID:", item.id);
          console.log("Price:", item.price);
          console.log("Image:", item.image);
          console.log("Title:", item.title);
          if (item.description) {
            console.log("Description:", item.description);
          }
          console.log("--------------------");
        });
      }
    });
  };
  

  return (
    <div className="teste">
      <button onClick={enviarDados}>Guardar Info</button>
      <button onClick={puxarDados}>Puxar Info</button>
    </div>
  );
};

export default TestDb;
