import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style/main.scss";
import Admin from "./pages/home/Admin.jsx";
import Allproduct from "./pages/all/Allproduct.jsx";
import CreateProduct from "./pages/Create/CreateProduct.jsx";
import DeleteProduct from "./pages/delete/DeleteProduct.jsx";
import EditProduct from "./pages/edit/EditProduct.jsx";

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/products/details/:id" element={<Allproduct />} />
      <Route path="/products/delete/:id" element={<DeleteProduct />} />
      <Route path="/products/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};
