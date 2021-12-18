import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Checkout from "../Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Checkout></Checkout>
      <Footer></Footer>
    </div>
  );
};

export default CheckoutPage;
