import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 bg-light shadow py-4 flex-shrink-0">
      <div className="container py-2">
        <div className="row gy-2 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Security Camera</h5>
            <p>
              Here you can use buy to organize your home security camera
              content.
            </p>
            <p className="small mb-0">
              &copy; Copyrights. All rights reserved.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold">Contact</h5>
            <p>
              <i className="fas fa-home"></i> Mirpur, Dhaka 1012, Bangladesh
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone"></i> + 8801700055005
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="mb-3 fw-bold">Security Carema</h5>
            <form action="#">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipient's email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-dark"
                  id="button-addon2"
                  type="button"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
