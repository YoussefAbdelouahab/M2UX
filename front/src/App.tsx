import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home"
import Product from "./views/Product/Product";
import Compare from "./views/Compare/Compare";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit/:product" element={<Product />} />
        <Route path="/comparer" element={<Compare />} />
      </Routes>
    </>
  );
}

