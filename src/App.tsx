import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import NavBarJS from "./scripts/NavBar";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  useEffect(() => {
    NavBarJS();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
