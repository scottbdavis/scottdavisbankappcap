import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
	amount: "12.00",
	currencyCode: "USD",
};

function reducer(state = initialState, action) {
	return state;
}

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
