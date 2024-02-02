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
    <div className="admin_main">
      {product.length > 0 ? (
        product.map((item) => {
          return (
            <div className="admin_sec">
              <div className="admine_container" key={item._id}>
                <div className="pro_container">
                  <h1>Brand: {item.brand}</h1>
                  <h1>Price: {item.price}</h1>

                  <h1>
                    <Link to={`/products/details/${item._id}`}>details</Link>
                  </h1>
                  <h1>
                    <Link to={`/products/edit/${item._id}`}>edit</Link>
                  </h1>
                  <h1>
                    <Link to={`/products/delete/${item._id}`}>delete</Link>
                  </h1>
                </div>
              </div>
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
