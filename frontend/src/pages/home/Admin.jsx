import React from "react";
import "./admine.scss";
import Loader from "../../components/Loader.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // console.log(product);

  return (
    <div className="main">
      {product.length > 0 ? (
        product.map((item) => {
          return (
            <div className="container" key={item._id}>
              <h2>Category: {item.category}</h2>
              <p>Brand: {item.brand}</p>
              <p>Price: {item.price}</p>
              <p>Description: {item.description}</p>
              <p>Stock: {item.stock}</p>
              <p>
                <Link to={`/products/details/${item._id}`}>details</Link>
              </p>
              <p>
                <Link to={`/products/edit/${item._id}`}>edit</Link>
              </p>
              <p>
                <Link to={`/products/edit/${item._id}`}>delete</Link>
              </p>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Admin;
