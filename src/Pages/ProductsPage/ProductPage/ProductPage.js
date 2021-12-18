import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </div>
  );
};

export default ProductPage;
