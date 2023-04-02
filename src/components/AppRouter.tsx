import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";

const AppRouter: FC = () => {

	const id = 1; // id товара

	return (
		<Routes>
			<Route path="/" element={<ProductCatalog />} />
			<Route path={`/product/${id}`} element={<Product />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="*" element={<ProductCatalog />} />
		</Routes>
	)
}

export default AppRouter;