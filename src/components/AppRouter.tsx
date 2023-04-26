import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks';

import Cart from '../pages/Cart/Cart';
import AdminArea from '../pages/AdminArea/AdminArea';
import Product from '../pages/Product/Product';
import CatalogProduct from '../pages/CatalogProduct/CatalogProduct';


const AppRouter: FC = () => {
	const { goods } = useAppSelector(state => state.goodReducer);

	return (
		<Routes>
			<Route path="/" element={<CatalogProduct />} />
			{goods.map((product) => <Route
				key={product.id}
				path={`/sultan-online-store/product/${product.id}`}
				element={
					<Product product={product}
					/>}
			/>
			)}
			<Route
				path="/sultan-online-store/cart"
				element={
					<Cart />
				}
			/>
			<Route
				path="/sultan-online-store/management"
				element={
					<AdminArea />
				}
			/>
			<Route path="*" element={<CatalogProduct />} />
		</Routes>
	)
}

export default AppRouter;
