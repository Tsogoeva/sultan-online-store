import { combineReducers, configureStore } from "@reduxjs/toolkit";
import goodReducer from './goodSlice'

const rootReducer = combineReducers({
	goodReducer
})

export const setupStore = () => configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
