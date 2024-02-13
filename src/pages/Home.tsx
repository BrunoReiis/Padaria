import Home_Main from "../components/Home/main";
import { useEffect } from "react";
import AddToCart from "../scripts/AddToCart";
import NavBarJS from "../scripts/NavBar";

function Home() {
  useEffect(() => {
    AddToCart();
    NavBarJS();
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
