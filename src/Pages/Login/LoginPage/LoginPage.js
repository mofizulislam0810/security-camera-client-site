import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Login from "../Login/Login";

const LoginPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
