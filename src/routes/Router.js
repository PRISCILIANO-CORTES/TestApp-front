import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { DetailProduct } from "../pages/DetailProduct";
import { Products } from "../pages/Products";
import { NewProduct } from "../pages/NewProduct";

export const Router = () => {
	return (
		<Routes>
			<Route path="product" element={<Products />} />
            <Route path="product/:id" element={<DetailProduct />} />
            <Route path="new" element={<NewProduct />} />
			
			<Route path="/*" element={<Navigate to="/product" />} />
		</Routes>
	);
};
