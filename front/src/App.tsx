import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home"
import Product from "./views/Product/Product";
import Compare from "./views/Compare/Compare";
import HomeV2 from "./views/HomeV2/HomeV2";
import ResultV2 from "./views/ResultV2/ResultV2";
import ProductV2 from "./views/ProductV2/ProductV2";

export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<HomeV2 />} /> 
        <Route path="/resultat/:product" element={<ResultV2 />} /> 
        <Route path="/produit/:product" element={<ProductV2 />} /> 
        {/* <Route path="/produit/:product" element={<Product />} /> */}
        {/* <Route path="/comparer" element={<Compare />} /> */}
      </Routes>
    </>
  );
}

