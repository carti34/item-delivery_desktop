import React from "react";
import { Link } from "react-router-dom";

const Deliveryman = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="menu">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/one">
          <h2>Stand</h2>
        </Link>
        <Link to="/two">
          <h2>Sit</h2>
        </Link>
        <Link to="/deliveryman">
          <h2>Deliveryman</h2>
        </Link>
        <Link to="/deliverymenList">
          <h2>Deliverymen List</h2>
        </Link>
      </div>
    </>
  );
};

export default Deliveryman;
