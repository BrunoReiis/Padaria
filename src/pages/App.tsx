import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Cart from "./Cart";
import User from "./User";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
