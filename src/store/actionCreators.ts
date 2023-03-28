
import axios from "axios";
import { IProduct } from "../types/IProduct";
import { goodsFetching, goodsFetchingFailed, goodsFetchingSuccess } from "./goodSlice";
import { AppDispatch } from "./reducers";

export const fetchGoods = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(goodsFetching())
		const response = await axios.get<IProduct[]>('http://localhost:5000/goods')
		dispatch(goodsFetchingSuccess(response.data));
	} catch (error: any) {
		dispatch(goodsFetchingFailed(error.message));
	}
}