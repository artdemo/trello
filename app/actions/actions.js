import {
	SUBMIT_NEW_BOARD,
	SUBMIT_NEW_LIST,
	SUBMIT_NEW_CARD,
	REPLACE_CARD,
	SET_ARCHIVE,
} from "./types";
import { getNextId } from "Utils/helpers";

export const submitNewBoard = (title) => {
	return (dispatch, getState) => {
		const { boards } = getState(),
			nextId = getNextId(boards);
		dispatch({
			type: SUBMIT_NEW_BOARD,
			payload: {
				id: nextId,
				title,
			},
		});
	};
};

export const submitNewList = (boardId, title) => {
	return (dispatch, getState) => {
		const { boards, lists } = getState(),
			nextId = getNextId(lists);

		dispatch({
			type: SUBMIT_NEW_LIST,
			payload: {
				id: nextId,
				title,
				boardId,
			},
		});
	};
};

export const submitNewCard = (boardId, listId, title) => {
	return (dispatch, getState) => {
		const { cards } = getState(),
			nextId = getNextId(cards);

		dispatch({
			type: SUBMIT_NEW_CARD,
			payload: {
				id: nextId,
				title,
				listId,
				boardId,
				isArchived: false,
			},
		});
	};
};

export const replaceCard = (cardId, listId) => {
	return (dispatch, getState) => {
		const { cards } = getState(),
			nextId = getNextId(cards);

		const currentIndex = cards.findIndex((card) => card.id == cardId);

		dispatch({
			type: REPLACE_CARD,
			payload: {
				listId,
				nextId,
				currentIndex,
			},
		});
	};
};

export const setArchive = (cardId) => {
	return (dispatch, getState) => {
		const { cards } = getState();

		const index = cards.findIndex((card) => card.id == cardId);

		dispatch({
			type: SET_ARCHIVE,
			payload: index,
		});
	};
};
