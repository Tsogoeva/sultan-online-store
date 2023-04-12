import { createAsyncThunk } from '@reduxjs/toolkit';
import db from './db.json';

localStorage.setItem('addedGoods', '[]');

export const fetchData = createAsyncThunk(
	'goods/fetchGoods',
	(_, { rejectWithValue }) => {

		try {
			const storage = localStorage.getItem('addedGoods');
			let parsedData: string[] = [];

			if (typeof storage === 'string') {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				parsedData = JSON.parse(storage);
			}

			// cant use json-server on github pages
			// const responseGoods = await axios.get<IProduct[]>(`http://localhost:5000/goods`);
			// const responseTypes = await axios.get<ITypes[]>(`http://localhost:5000/types`);

			// use stub instead
			const responseGoods = [...db.goods, ...parsedData];
			const responseTypes = db.types;

			return { goods: responseGoods, types: responseTypes };
		} catch (e) {
			return rejectWithValue('Не удалось загрузить товары!');
		}
	}
);
