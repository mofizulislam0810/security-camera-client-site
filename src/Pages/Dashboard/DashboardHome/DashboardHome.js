import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const DashboardHome = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
};

export default DashboardHome;
