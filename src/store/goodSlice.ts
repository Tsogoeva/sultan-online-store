import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";
import { fetchGoods } from "./actionCreators";

interface GoodState {
	goods: IProduct[],
	isLoading: boolean,
	error: string
}

const initialState: GoodState = {
	goods: [],
	isLoading: false,
	error: ''
}

export const goodSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGoods.pending.type, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGoods.fulfilled.type, (state, action: PayloadAction<IProduct[]>) => {
				state.isLoading = false;
				state.error = '';
				state.goods = action.payload;
			})
			.addCase(fetchGoods.rejected.type, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
})

export default goodSlice.reducer;