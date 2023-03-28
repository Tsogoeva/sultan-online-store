import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

interface GoodState {
	goods: IProduct[],
	isLoading: boolean,
	error: string
	// count: number
}

const initialState: GoodState = {
	goods: [],
	isLoading: false,
	error: ''
	// count: 0
}

export const goodSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		goodsFetching(state) {
			state.isLoading = true;
		},

		goodsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
			state.isLoading = false;
			state.error = '';
			state.goods = action.payload;

		},

		goodsFetchingFailed(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;

		}

		// increment(state, action: PayloadAction<number>) {
		// 	state.count += action.payload;
		// }

	}
})

export const { goodsFetching, goodsFetchingSuccess, goodsFetchingFailed } = goodSlice.actions;
export default goodSlice.reducer;