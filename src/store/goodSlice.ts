import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPriceRange } from "../components/UX/FilterFormByPrice/FilterFormByPrice";
import { IProduct } from "../types/IProduct";
import { fetchGoods } from "./actionCreators";

interface GoodState {
	goods: IProduct[],
	types: string[],
	subtypes: string[],
	manufacturers: string[],
	isLoading: boolean,
	error: string
}

const initialState: GoodState = {
	goods: [],
	types: [],
	subtypes: [],
	manufacturers: [],
	isLoading: false,
	error: ''
}

export const goodSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		filterByPrice: (state, action: PayloadAction<IPriceRange>) => {

			const filteredGoods = state.goods.filter((product) => {
				const productPrice = Number(product.price);
				const minPrice = action.payload.min;
				const maxPrice = action.payload.max;

				if (productPrice >= minPrice && productPrice <= maxPrice) {
					return product;
				}
			});

			state.goods = filteredGoods;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGoods.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGoods.fulfilled.type, (state, action: PayloadAction<IProduct[]>) => {
				state.isLoading = false;
				state.error = '';
				state.goods = action.payload;
				state.types = Array.from(new Set([...state.goods.map(({ type }) => type)].flat()));
				state.subtypes = Array.from(new Set([...state.goods.map(({ subtype }) => subtype)].flat()));
				state.manufacturers = Array.from(new Set([...state.goods.map(({ manufacturer }) => manufacturer)].flat()));


			})
			.addCase(fetchGoods.rejected.type, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
})

export const { filterByPrice } = goodSlice.actions;

export default goodSlice.reducer;