import Home_Main from "../components/Home/main";
import { useEffect } from "react";
import AddToCart from "../scripts/AddToCart";

function Home() {
  useEffect(() => {
    AddToCart();
  }, []);
  return (
    <>
      <section id="home">
        <Home_Main />
      </section>
    </>
  );
}

export default Home;
