import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Nabvar.css";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            SECURITY CAMERA
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Security Cameras
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              {user?.email ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-dark ms-2">
                      {user.displayName}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-dark ms-2"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-outline-dark">
                      <i className="fas fa-sign-in-alt me-1"></i>Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="btn btn-outline-dark ms-2">
                      <i className="fas fa-user me-1"></i>Register
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fas fa-cart-plus me-1"></i>Cart ({state.length})
                </Link>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
