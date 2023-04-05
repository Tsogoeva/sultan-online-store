import { FC, useEffect, useMemo } from "react";
import styles from './product-table.module.scss';

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchData } from "../../../store/actionCreators";

import ProductBox from "../ProductBox/ProductBox";
import { IProduct } from "../../../types/IProduct";
import { IManufacturers } from "../../../store/goodSlice";
import Pagination from "../Pagination/Pagination";

const filterByPrice = (goods: IProduct[], min: number, max: number) => goods.filter((product) => {
	const productPrice = Number(product.price);

	if (productPrice >= min && productPrice <= max) {
		return product;
	}
});

const filterByManufacturer = (goods: IProduct[], manufacturers: IManufacturers[], value: string) => goods.filter((product) => {
	let countOfFalse = 0;

	manufacturers.forEach((manufacturer) => {
		if (!manufacturer.isChecked) {
			countOfFalse += 1;
		}
	});

	if (countOfFalse === manufacturers.length && !value) {
		return goods;
	}

	for (const { name, isChecked } of manufacturers) {
		if (product.manufacturer === name && isChecked) {
			return product;
		}
		if (value) {
			if (product.manufacturer.toLowerCase() === value.toLowerCase()) {
				return product
			}

			if (product.manufacturer.toLocaleLowerCase().includes(value.toLowerCase())) {
				return product;
			}
		}
	}
});


const filterByType = (goods: IProduct[], currentType: string) => {
	if (!currentType) {
		return goods;
	}

	const currentProduct = goods.filter((product) => product.types.includes(currentType));

	return currentProduct.length ? currentProduct : goods;
}

const filterBySubtype = (goods: IProduct[], currentSubtype: string) => {
	if (!currentSubtype) {
		return goods;
	}

	const currentProduct = goods.filter((product) => product.subtypes.includes(currentSubtype));

	return currentProduct.length ? currentProduct : goods;
}

const getSortingProducts = (goods: IProduct[], typeSorting: string) => {
	console.log(typeSorting)
	switch (typeSorting) {
		case 'sortByPriceUp':
			return goods.sort((a, b) => Number(a.price) < Number(b.price) ? -1 : 1);

		case 'sortByPriceDown':
			return goods.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1);


		case 'sortByNameAbc':
			return goods.sort((a, b) => a.title < b.title ? -1 : 1);

		case 'sortByNameCba':
			return goods.sort((a, b) => a.title > b.title ? -1 : 1);

		default:
			return goods;
	}
}

const changePage = (goods: IProduct[], currentPage: number, perPage: number) => {
	if (currentPage === 1) {
		return goods.slice(currentPage - 1, perPage);
	} else {
		return goods.slice(perPage * (currentPage - 1), perPage * currentPage);
	}
}


const ProductTable: FC = () => {
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
		}
	} = useAppSelector(state => state.goodReducer)

	let relatedGoods: IProduct[] = goods;
	let productsForCureentPage: IProduct[] = goods;

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		dispatch(fetchData());
		productsForCureentPage = changePage(relatedGoods, currentPage, perPage);
	}, [])

	useMemo(() => {
		console.log('!!!');

		relatedGoods = goods;
		relatedGoods = filterByPrice(relatedGoods, minPrice, maxPrice);
		relatedGoods = filterByManufacturer(relatedGoods, manufacturers, inputManufacturerValue);
		relatedGoods = filterByType(relatedGoods, currentType);
		relatedGoods = filterBySubtype(relatedGoods, currentSubtype);
		relatedGoods = getSortingProducts(relatedGoods, currentSorting);

		productsForCureentPage = changePage(relatedGoods, currentPage, perPage)


		console.log({ relatedGoods: relatedGoods })
		console.log({ productsForCureentPage: productsForCureentPage })

	}, [
		minPrice,
		maxPrice,
		manufacturers,
		inputManufacturerValue,
		currentPage,
		currentType,
		currentSubtype,
		currentSorting
	])

	return (
		<div className={styles.container}>
			<div className={styles.table}>
				{productsForCureentPage && productsForCureentPage.map((product: IProduct) => <ProductBox key={product.id} product={product} />)}
			</div>
			<Pagination goods={relatedGoods} />
			<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
		</div>
	)
}

export default ProductTable;
