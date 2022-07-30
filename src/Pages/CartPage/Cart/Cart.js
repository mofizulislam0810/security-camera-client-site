import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment, delCart, decrement } from "../../../redux/action";
import "./Cart.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const dispatch = useDispatch();
  const handlePlus = (item) => {
    dispatch(increment(item));
  };
  const handleMinus = (item) => {
    dispatch(decrement(item));
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const cartItems = (cartItem) => {
    return (
      <div className="top-margin">
        <div className="p-2 my-5 bg-light rounded-3">
          <div className="container">
            <button
              onClick={() => handleDel(cartItem)}
              className="btn-close float-end"
              arial-label="Close"
            ></button>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.name}
                  height="180px"
                  width="150px"
                />
              </div>
              <div className="col-md-4">
                <h5>{cartItem.name}</h5>
                <p className="lead fw-bold">
                  {cartItem.qty} X ${cartItem.price} = $
                  {cartItem.qty * cartItem.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleMinus(cartItem)}
                  disabled={cartItem.qty > 1 ? false : true}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handlePlus(cartItem)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is empty!</h3>
          </div>
        </div>
      </div>
    );
  };
  const button = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/checkout" className="btn btn-outline-dark w-25">
            Proceed To Checkout
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
