import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import './App.css'

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <ProductsList showHeader={true}/>
          </>
        }/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<ProductsList showHeader={false}/>}/>
        <Route path="/products/:productId" element={<ProductDetails />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
