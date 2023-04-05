
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct } from '../types/IProduct';
import { ITypes } from './goodSlice';
import db from './db.json';
console.log({ db });

export const fetchData = createAsyncThunk(
	'goods/fetchGoods',
	(_, { rejectWithValue }) => {

		try {
			// cant use json-server on github pages
			// const responseGoods = await axios.get<IProduct[]>(`http://localhost:5000/goods`);
			// const responseTypes = await axios.get<ITypes[]>(`http://localhost:5000/types`);

			// use stub instead
			const responseGoods = db.goods;
			const responseTypes = db.types;

			return { goods: responseGoods, types: responseTypes };
		} catch (e) {
			return rejectWithValue('Не удалось загрузить товары!');
		}
	}
);
