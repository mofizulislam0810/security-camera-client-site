import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { admin, logout } = useAuth();
  const nevigate = useNavigate();

  const handleLogOut = () => {
    logout();
    nevigate("/");
  };
  return (
    <div className="container my-5 pb-5">
      <div className="row">
        <div className="col-lg-2 py-3 mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-dark">
                  DashBoard
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <Link to={"/myorder"}>
                    <button className="btn btn-outline-dark w-100">
                      My Order
                    </button>
                  </Link>
                </th>
              </tr>
              {admin && (
                <>
                  <tr>
                    <th scope="row">
                      <Link to={"/allorder"}>
                        <button className="btn btn-outline-dark w-100">
                          All Orders
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={"allproduct"}>
                        <button className="btn btn-outline-dark w-100">
                          All Product
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={"addproduct"}>
                        <button className="btn btn-outline-dark w-100">
                          Add Product
                        </button>
                      </Link>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Link to={"makeadmin"}>
                        <button className="btn btn-outline-dark w-100">
                          Make Admin
                        </button>
                      </Link>
                    </th>
                  </tr>
                </>
              )}
              <tr>
                <th scope="row">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline-dark w-100"
                  >
                    Log Out
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-10 py-2 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
