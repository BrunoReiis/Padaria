import NavBar from "./components/NavBar";
import ProductRow from "./components/ProductRow";
import SideBar from "./components/SideBar";

function App() {
  // #page_content e #products no "main.scss"
  return (
    <>
      <NavBar />
      <div id="page_content">
        <SideBar />
        <div id="products">
          <ProductRow />
          <ProductRow />
        </div>
      </div>
    </>
  );
}

export default App;
