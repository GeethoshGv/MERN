import React from "react";
import { Link } from "react-router-dom";

const Back = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination}>back</Link>
    </div>
  );
};

export default Back;
