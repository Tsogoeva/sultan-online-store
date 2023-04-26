import { FC, useEffect, useMemo } from 'react';
import styles from './table-product.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchData } from '../../../store/actionCreators';

import CardCatalog from '../CardCatalog/CardCatalog';
import Pagination from '../Pagination/Pagination';
import NoSuchProducts from '../NoSuchProducts/NoSuchProducts';
import { IProduct } from '../../../interfaces';
import {
	changePage,
	filterByManufacturer,
	filterByPrice,
	filterBySubtype,
	filterByType,
	sortProducts
} from './utils';


const TableProduct: FC = () => {
	const dispatch = useAppDispatch()
	const {
		goods,
		manufacturers,
		form: {
			minPrice,
			maxPrice,
			currentType,
			currentSubtype,
			inputManufacturerValue,
			currentSorting
		},
		pagination: {
			currentPage,
			perPage,
		},
		cart
	} = useAppSelector(state => state.goodReducer);

	let relatedGoods: IProduct[] = goods;
	let productsForCurrentPage: IProduct[] = goods;

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		dispatch(fetchData());
		productsForCurrentPage = changePage(relatedGoods, currentPage, perPage);
	}, [])

	useMemo(() => {
		relatedGoods = goods;
		relatedGoods = filterByPrice(relatedGoods, minPrice, maxPrice);
		relatedGoods = filterByManufacturer(relatedGoods, manufacturers, inputManufacturerValue);
		relatedGoods = filterByType(relatedGoods, currentType);
		relatedGoods = filterBySubtype(relatedGoods, currentSubtype);
		relatedGoods = sortProducts(relatedGoods, currentSorting);

		productsForCurrentPage = changePage(relatedGoods, currentPage, perPage);
	}, [
		minPrice,
		maxPrice,
		manufacturers,
		inputManufacturerValue,
		currentPage,
		currentType,
		currentSubtype,
		currentSorting,
		cart
	])

	return (
		<div className={styles.container}>
			<div className={styles.table}>
				{productsForCurrentPage
					&& productsForCurrentPage
						.map((product: IProduct) => <CardCatalog
							key={product.id}
							product={product}
						/>
						)}
				{!productsForCurrentPage.length && <NoSuchProducts />}
			</div>
			<Pagination goods={relatedGoods} />
			<p
				className={styles.description}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
			</p>
		</div>
	)
}

export default TableProduct;
