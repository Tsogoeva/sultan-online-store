
export interface IFetchedData {
	goods: IProduct[],
	types: ITypesProduct[]
}

export interface IGoodState {
	isLoading: boolean,
	error: string,
	goods: IProduct[],
	form: IForm,
	subtypeByTypeList: ITypesProduct[],
	types: string[],
	subtypes: string[],
	manufacturers: IChecked[],
	pagination: IPagination,
	cart: ICart[],
	modal: boolean,
	managingTypes: IChecked[],
	managingSubtypes: IChecked[],
}

export interface IProduct {
	id: string,
	imgUrl: string,
	title: string,
	types: string[],
	subtypes: string[],
	typeSize: string,
	size: string,
	barcode: string,
	manufacturer: string,
	brand: string,
	description: string,
	price: string
}

export interface IChecked {
	name: string,
	isChecked: boolean
}

export interface IForm {
	minPrice: number,
	maxPrice: number,
	currentType: string,
	currentSubtype: string,
	inputManufacturerValue: string,
	currentSorting: string
}

export interface ITypesProduct {
	type: string,
	subtypes: string[]
}

export interface IPagination {
	currentPage: number,
	perPage: number
}

export interface ICart {
	product: IProduct,
	count: number,
	price: number
}


