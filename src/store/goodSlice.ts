import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
	ICart,
	IChecked,
	IFetchedData,
	IGoodState,
	IPriceRange,
	IProduct
} from '../interfaces';
import { fetchData } from './actionCreators';


export const initialState: IGoodState = {
	isLoading: false,
	error: '',
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
	pagination: {
		currentPage: 1,
		perPage: 9,
	},
	cart: [],
	modal: false,
	managingTypes: [],
	managingSubtypes: [],
}

export const goodSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {

		runFilterByPrice: (state, { payload }: PayloadAction<IPriceRange>) => {
			state.form.minPrice = payload.min;
			state.form.maxPrice = payload.max;
		},

		runFilterByManufacturer: (state, { payload }: PayloadAction<IChecked>) => {
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

		addProductToCart: (state, { payload }: PayloadAction<ICart>) => {
			state.cart.push(payload);
		},

		changeProductToCartCount: (state, { payload }: PayloadAction<ICart>) => {
			state.cart = state.cart.map((current) => {
				if (current.product.id === payload.product.id) {
					return payload;
				}
				return current;
			});
		},

		removeProductFromCart: (state, { payload }: PayloadAction<string>) => {
			state.cart = state.cart.filter(({ product }) => product.id !== payload);
		},

		changeStateModal: (state, { payload }: PayloadAction<boolean>) => {
			state.modal = !payload;
		},

		resetCart: (state) => {
			state.cart = [];
		},

		addNewProduct: (state, { payload }: PayloadAction<IProduct>) => {
			const storage = localStorage.getItem('addedGoods');
			let parsedData: IProduct[];

			if (typeof storage === 'string') {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				parsedData = JSON.parse(storage);
				const updatedStorage = [...parsedData, payload];
				localStorage.setItem('addedGoods', JSON.stringify(updatedStorage));
			}

			state.goods = [...state.goods, payload];
		},

		manageTypeForNewProduct: (state, { payload }: PayloadAction<IChecked>) => {
			state.managingTypes = state.managingTypes.map((type) => {
				if (type.name === payload.name) {
					type.isChecked = payload.isChecked;
				}
				return type;
			})
		},

		manageSubtypeForNewProduct: (state, { payload }: PayloadAction<IChecked>) => {
			state.managingSubtypes = state.managingSubtypes.map((subtype) => {
				if (subtype.name === payload.name) {
					subtype.isChecked = payload.isChecked;
				}
				return subtype;
			})
		},

		resetTypeForNewProduct: (state) => {
			state.managingTypes = state.types.map((type) => ({ name: type, isChecked: false }));
		},

		resetSubtypeForNewProduct: (state) => {
			state.managingSubtypes = Array.from(new Set(state.subtypes)).map((subtype) => ({ name: subtype, isChecked: false }));
		},

		addModifiedProductToGoods: (state, { payload }: PayloadAction<IProduct>) => {
			const filteredGoods = state.goods.filter((product) => payload.id !== product.id);
			state.goods = [...filteredGoods, payload];
		},

		removeProductFromGoods: (state, { payload }: PayloadAction<string>) => {
			if (payload.startsWith('new_')) {
				const storage = localStorage.getItem('addedGoods');
				let parsedData: IProduct[];

				if (typeof storage === 'string') {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					parsedData = JSON.parse(storage);
					const updatedStorage = parsedData.filter((currentProduct) => currentProduct.id !== payload);
					localStorage.setItem('addedGoods', JSON.stringify(updatedStorage));
				}
			}
			state.goods = state.goods.filter((product) => payload !== product.id);
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

				state.managingTypes = state.types.map((type) => ({ name: type, isChecked: false }));
				state.managingSubtypes = Array.from(new Set(state.subtypes)).map((subtype) => ({ name: subtype, isChecked: false }));

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
	addProductToCart,
	changeProductToCartCount,
	removeProductFromCart,
	changeStateModal,
	resetCart,
	addNewProduct,
	manageTypeForNewProduct,
	resetTypeForNewProduct,
	manageSubtypeForNewProduct,
	resetSubtypeForNewProduct,
	addModifiedProductToGoods,
	removeProductFromGoods

} = goodSlice.actions;

export default goodSlice.reducer;
