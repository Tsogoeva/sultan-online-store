import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPriceRange } from '../components/UX/FilterFormByPrice/FilterFormByPrice';
import { IProduct } from '../types/IProduct';
import { fetchData } from './actionCreators';

export interface IManufacturers {
	name: string,
	isChecked: boolean
}
interface IForm {
	minPrice: number,
	maxPrice: number,
	currentType: string,
	currentSubtype: string,
	inputManufacturerValue: string,
	currentSorting: string
}

export interface ITypes {
	type: string,
	subtypes: string[]
}

interface IPagination {
	currentPage: number,
	perPage: number
}

interface ICart {
	product: IProduct,
	count: number,
	price: number
}
interface IGoodState {
	goods: IProduct[],
	form: IForm,
	subtypeByTypeList: ITypes[],
	types: string[],
	subtypes: string[],
	manufacturers: IManufacturers[],
	isLoading: boolean,
	error: string,
	pagination: IPagination,
	cart: ICart[],
	removingProductIdFromCart: string,
	modal: boolean
}

interface IFetchedData {
	goods: IProduct[],
	types: ITypes[]
}



const initialState: IGoodState = {
	goods: [],
	form: {
		minPrice: 0,
		maxPrice: 10000,
		currentType: '',
		currentSubtype: '',
		inputManufacturerValue: '',
		currentSorting: ''
	},
	subtypeByTypeList: [],
	types: [],
	subtypes: [],
	manufacturers: [],
	isLoading: false,
	error: '',
	pagination: {
		currentPage: 1,
		perPage: 9,
	},
	cart: [],
	removingProductIdFromCart: '',
	modal: false
}

export const goodSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		runFilterByPrice: (state, { payload }: PayloadAction<IPriceRange>) => {
			state.form.minPrice = payload.min;
			state.form.maxPrice = payload.max;
		},
		runFilterByManufacturer: (state, { payload }: PayloadAction<IManufacturers>) => {
			state.manufacturers.forEach((manufacturer) => {
				if (payload.name === manufacturer.name) {
					manufacturer.isChecked = payload.isChecked;
				}
			})
		},
		runFilterByManufacturerForInput: (state, { payload }: PayloadAction<string>) => {
			state.form.inputManufacturerValue = payload;
		},
		setCurrentPage: (state, { payload }: PayloadAction<number>) => {
			state.pagination.currentPage = payload;
		},
		toggleCurrentType: (state, { payload }: PayloadAction<string>) => {
			if (state.form.currentType === payload) {
				state.form.currentType = '';
				state.form.currentSubtype = '';
			} else {
				state.form.currentType = payload;
			}
		},
		toggleCurrentSubtype: (state, { payload }: PayloadAction<string>) => {
			if (state.form.currentSubtype === payload) {
				state.form.currentSubtype = '';
			} else {
				state.form.currentSubtype = payload;
			}
		},
		setCurrentSorting: (state, { payload }: PayloadAction<string>) => {
			state.form.currentSorting = payload;
		},
		changeProductToCartCount: (state, { payload }: PayloadAction<ICart>) => {
			state.cart = state.cart.filter((current) => current.product.id !== payload.product.id);
			state.cart = [payload, ...state.cart];

			console.log(state.cart)


		},
		removeProductFromCart: (state, { payload }: PayloadAction<string>) => {
			state.cart = state.cart.filter(({ product }) => product.id !== payload);
		},

		changeStateModal: (state, { payload }: PayloadAction<boolean>) => {
			state.modal = !payload;
		},
		resetCart: (state) => {
			state.cart = [];
		}


	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchData.fulfilled.type, (state, { payload }: PayloadAction<IFetchedData>) => {
				state.isLoading = false;
				state.error = '';
				state.goods = payload.goods;
				state.types = payload.types.map((type) => type.type);
				state.subtypes = payload.types.flatMap((type) => type.subtypes);
				state.subtypeByTypeList = payload.types;

				const uniqManufacturers = Array.from(new Set([...state.goods.map(({ manufacturer }) => manufacturer)].flat()));
				state.manufacturers = uniqManufacturers.map((manufacturer) => ({ name: manufacturer, isChecked: false }));

			})
			.addCase(fetchData.rejected.type, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
})

export const {
	runFilterByPrice,
	runFilterByManufacturer,
	runFilterByManufacturerForInput,
	setCurrentPage,
	toggleCurrentType,
	toggleCurrentSubtype,
	setCurrentSorting,
	changeProductToCartCount,
	removeProductFromCart,
	changeStateModal,
	resetCart

} = goodSlice.actions;

export default goodSlice.reducer;