import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/action";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(
        `http://localhost:5000/products/${productId}`
      );
      setProduct(await response.json());
      setloading(false);
    };
    getProduct();
  }, []);
  console.log(product);
  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Spinner /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;