// import axios from 'axios';

// import { IProduct } from '../types/IProduct';
// import { ITypes } from './goodSlice';

import { createAsyncThunk } from '@reduxjs/toolkit';
import db from './db.json';

localStorage.setItem('addedGoods', '[]');

export const fetchData = createAsyncThunk(
	'goods/fetchGoods',
	(_, { rejectWithValue }) => {

		try {
			const storage = localStorage.getItem('addedGoods');
			let parse: string[] = [];

			if (typeof storage === 'string') {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				parse = JSON.parse(storage);
			}

			// cant use json-server on github pages
			// const responseGoods = await axios.get<IProduct[]>(`http://localhost:5000/goods`);
			// const responseTypes = await axios.get<ITypes[]>(`http://localhost:5000/types`);

			// use stub instead
			const responseGoods = [...db.goods, ...parse];
			const responseTypes = db.types;

			return { goods: responseGoods, types: responseTypes };
		} catch (e) {
			return rejectWithValue('Не удалось загрузить товары!');
		}
	}
);
