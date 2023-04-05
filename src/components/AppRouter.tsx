import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks';

import Cart from '../pages/Cart/Cart';
import Product from '../pages/Product/Product';
import ProductCatalog from '../pages/ProductCatalog/ProductCatalog';


const AppRouter: FC = () => {
	const { goods } = useAppSelector(state => state.goodReducer)

	return (
		<Routes>
			<Route path="/" element={<ProductCatalog />} />
			{goods.map((product) => <Route
				path={`/product/${product.id}`}
				element={<Product product={product}
				/>}
			/>
			)}
			<Route path="/cart" element={<Cart />} />
			<Route path="*" element={<ProductCatalog />} />
		</Routes>
	)
}

export default AppRouter;
