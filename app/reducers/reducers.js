import {
	SUBMIT_NEW_BOARD,
	SUBMIT_NEW_LIST,
	SUBMIT_NEW_CARD,
	REPLACE_CARD,
	SET_ARCHIVE,
} from "Actions/types";
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

const handleCardReducer = (state = [], action) => {
	switch (action.type) {
		case SUBMIT_NEW_CARD:
			return [...state, action.payload];
		case REPLACE_CARD:
			const { listId, nextId, currentIndex } = action.payload;

			const clonedState = [...state];

			const cardToReplace = clonedState.splice(currentIndex, 1)[0];

			cardToReplace.listId = listId;
			cardToReplace.id = nextId;

			clonedState.push(cardToReplace);

			return clonedState;
		case SET_ARCHIVE:
			const index = action.payload,
				cardToSet = state[index],
				currentStatus = cardToSet.isArchived;

			const newState = [...state];

			newState.splice(index, 1, { ...cardToSet, isArchived: !currentStatus });

			return newState;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	boards: handleBoardReducer,
	lists: handleListReducer,
	cards: handleCardReducer,
});
