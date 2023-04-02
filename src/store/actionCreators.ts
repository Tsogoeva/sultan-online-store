
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../types/IProduct";


export const fetchGoods = createAsyncThunk(
	'goods/fetchGoods',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get<IProduct[]>('http://localhost:5000/goods');
			return response.data;
		} catch (e) {
			return rejectWithValue('Не удалось загрузить товары!')
		}
	}
);

// export const fetchFilteredGoodsByPrice = createAsyncThunk(
// 	'goods/fetchFilteredGoodsByPrice',
// 	async (params: string[], { rejectWithValue }) => {
// 		// const currentParams = new URLSearchParams();


// 		try {
// 			const response = await axios.get<IProduct[]>('http://localhost:5000/goods');
// 			console.log(response.data);
// 			//title=json-server&author=typicode'
// 		} catch (e) {
// 			return rejectWithValue('Не удалось загрузить товары!')
// 		}
// 	}
// )