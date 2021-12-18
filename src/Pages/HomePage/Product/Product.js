import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, image, price, name } = props.product;
  return (
    <div className="col-md-3 my-4">
      <div className="card h-100 text-center p-4">
        <img src={image} className="card-img-top" alt={name} height="250px" />
        <div className="card-body">
          <h5 className="card-title mb-0">{name.substring(0, 20)}</h5>
          <p className="card-text lead fw-bold">${price}</p>
          <Link to={`/product/${_id}`} className="btn btn-outline-dark">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
