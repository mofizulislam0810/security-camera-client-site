import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import Product from "../Product/Product";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://evening-cliffs-01077.herokuapp.com/products"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (category) => {
    const updatedList = data.filter((product) => product.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="mb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("fixed turret camera")}
          >
            Fixed Turrent Camera
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("bullet camera")}
          >
            Bullet Camera
          </button>
        </div>
        {filter.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-4 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Letest Security Cameras
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Spinner /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
