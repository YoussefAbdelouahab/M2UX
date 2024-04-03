import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home"
import Product from "./views/Product/Product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit" element={<Product />} />
      </Routes>
    </>
  );
}

