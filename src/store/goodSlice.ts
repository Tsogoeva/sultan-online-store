import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPriceRange } from '../components/UX/FilterFormByPrice/FilterFormByPrice';
import { IProduct } from '../types/IProduct';
import { fetchData } from './actionCreators';

export interface IChecked {
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
	// addedGoods: IProduct[],
	form: IForm,
	subtypeByTypeList: ITypes[],
	types: string[],
	subtypes: string[],
	manufacturers: IChecked[],
	isLoading: boolean,
	error: string,
	pagination: IPagination,
	cart: ICart[],
	removingProductIdFromCart: string,
	modal: boolean,
	managingTypes: IChecked[],
	managingSubtypes: IChecked[]

}

interface IFetchedData {
	goods: IProduct[],
	types: ITypes[]
}



const initialState: IGoodState = {
	goods: [],
	// addedGoods: [],
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
	modal: false,
	managingTypes: [],
	managingSubtypes: []
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

		changeProductToCartCount: (state, { payload }: PayloadAction<ICart>) => {
			state.cart = state.cart.filter((current) => current.product.id !== payload.product.id);
			state.cart = [payload, ...state.cart];

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

		manageSybtypeForNewProduct: (state, { payload }: PayloadAction<IChecked>) => {
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
		}

	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchData.fulfilled.type, (state, { payload }: PayloadAction<IFetchedData>) => {
				const storage = localStorage.getItem('addedGoods');
				let parsedData: IProduct[] = [];

				if (typeof storage === 'string') {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					parsedData = JSON.parse(storage);
				}

				state.isLoading = false;
				state.error = '';
				state.goods = [...payload.goods, ...parsedData];
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
	changeProductToCartCount,
	removeProductFromCart,
	changeStateModal,
	resetCart,
	addNewProduct,
	manageTypeForNewProduct,
	resetTypeForNewProduct,
	manageSybtypeForNewProduct,
	resetSubtypeForNewProduct

} = goodSlice.actions;

export default goodSlice.reducer;
