import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...addProduct };
    newProduct[field] = value;
    console.log(field, value, newProduct);
    setAddProduct(newProduct);
  };
  const handleAddProduct = (e) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Add Successfully!");
          e.target.reset();
          navigate("/");
        }
      });
    console.log(addProduct);
    e.preventDefault();
  };
  return (
    <div className="mx-5 mt-5">
      <h2 className="btn btn-dark bg-gradient m-3 w-50 fw-bold">
        Add New Camera In Camera Section
      </h2>
      <form
        onSubmit={handleAddProduct}
        className="row g-3 p-3 w-75 mx-auto
    "
      >
        <div className="col-md-12 mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputEmail4"
            placeholder="Camera Name"
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="text"
            name="category"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputEmail4"
            placeholder="Camera Category"
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <input
            type="number"
            name="price"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputDate"
            placeholder="Camera Price"
            required
          />
        </div>
        <div className="col-12 mb-3">
          <textarea
            type="text"
            name="description"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputAddress"
            placeholder="Camera Description"
            style={{ height: "100px" }}
            required
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            name="image"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputAddress2"
            placeholder="Camera Image Url"
            required
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            name="code"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputAddress2"
            placeholder="Camera Code"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-dark w-100">
            Add New Camera
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
