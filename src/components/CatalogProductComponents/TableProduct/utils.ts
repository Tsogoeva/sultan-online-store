import { IChecked, IProduct } from "../../../interfaces";

export const filterByPrice = (goods: IProduct[], min: number, max: number) => goods.filter((product) => {
	const productPrice = Number(product.price);

	if (productPrice >= min && productPrice <= max) {
		return product;
	}
});


export const filterByManufacturer = (goods: IProduct[], manufacturers: IChecked[], value: string) => goods.filter((product) => {
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


export const filterByType = (goods: IProduct[], currentType: string) => {
	if (!currentType) {
		return goods;
	}

	const currentProducts = goods.filter((product) => product.types.includes(currentType));

	return currentProducts;
}

export const filterBySubtype = (goods: IProduct[], currentSubtype: string) => {
	if (!currentSubtype) {
		return goods;
	}

	const currentProducts = goods.filter((product) => product.subtypes.includes(currentSubtype));

	return currentProducts;
}

export const sortProducts = (goods: IProduct[], typeSorting: string) => {
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

export const changePage = (goods: IProduct[], currentPage: number, perPage: number) => {
	if (currentPage === 1) {
		return goods.slice(currentPage - 1, perPage);
	} else {
		return goods.slice(perPage * (currentPage - 1), perPage * currentPage);
	}
}