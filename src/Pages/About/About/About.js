import React from "react";
import img from "../../../images/wyze-brand-update-09-1-20-199-1.jpg";

const About = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row my-2">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <div className="rounded-pill bg-dark mt-5 p-3 text-white fw-bold">
              About Security Camera
            </div>
            <p className="p-large mt-3">
              Over the past several weeks the yard at my friends home has been
              the target of teenage horseplay. Toilet paper has been tossed
              among the trees and egg yolks have stained the finish off their
              siding. Needless to say, they had it—so much so that they decided
              to invest in a surveillance camera. Its something they rather not
              have to buy … I wish they did not, too, but the unfortunate
              circumstance has inspired me to track down the top features to
              look for when shopping for a surveillance camera.
            </p>
            <button className="rounded-pill btn btn-dark my-2 px-5 fw-bold">
              We Are Waiting...
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="rounded img-fluid" src={img} alt="alternative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
