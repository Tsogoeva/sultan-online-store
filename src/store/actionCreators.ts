
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct } from '../types/IProduct';
import { ITypes } from './goodSlice';

export const fetchData = createAsyncThunk(
	'goods/fetchGoods',
	async (_, { rejectWithValue }) => {

		try {
			const responseGoods = await axios.get<IProduct[]>(`http://localhost:5000/goods`);
			const responseTypes = await axios.get<ITypes[]>(`http://localhost:5000/types`);
			return { goods: responseGoods.data, types: responseTypes.data };
		} catch (e) {
			return rejectWithValue('Не удалось загрузить товары!');
		}
	}
);
