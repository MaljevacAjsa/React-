import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

const AppCas16 = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppCas16;
