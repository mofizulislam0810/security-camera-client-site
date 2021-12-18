import React from "react";
import imageOne from "../../../images/best-outdoor-security-dvr.jpg";
import imageTwo from "../../../images/the-best-night-vision-security-camera.jpg";
import imageThree from "../../../images/wyze-brand-update-09-1-20-199-1.jpg";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imageOne}
              className="d-block w-100"
              alt="..."
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imageTwo}
              className="d-block w-100"
              alt="..."
              height="600px"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imageThree}
              className="d-block w-100"
              alt="..."
              height="600px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
