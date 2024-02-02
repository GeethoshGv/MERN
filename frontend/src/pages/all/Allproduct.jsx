import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../components/Back";
import Loader from "../../components/Loader";

const Allproduct = () => {
  const { id } = useParams();
  const [singleproduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  return (
    <>
      <div>
        <Back />
        {Object.keys(singleproduct).length > 0 ? (
          <div className="admin_sec">
            <div className="admine_container" key={singleproduct._id}>
              <div className="pro_container">
                <h1>Category: {singleproduct.category}</h1>
                <h1>Brand: {singleproduct.brand}</h1>
                <h1>Price: {singleproduct.price}</h1>
                <h1>Description: {singleproduct.description}</h1>
                <h1>Stock: {singleproduct.stock}</h1>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Allproduct;
