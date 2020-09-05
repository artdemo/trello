import { SUBMIT_NEW_BOARD, SUBMIT_NEW_LIST } from "Actions/types";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const handleBoardReducer = (state = [], action) => {
	switch (action.type) {
		case SUBMIT_NEW_BOARD:
			return [...state, action.payload];
		default:
			return state;
	}
};

const handleListReducer = (state = [], action) => {
	switch (action.type) {
		case SUBMIT_NEW_LIST:
			return [...state, action.payload];
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	boards: handleBoardReducer,
	lists: handleListReducer,
});
