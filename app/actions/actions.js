import { SUBMIT_NEW_BOARD, SUBMIT_NEW_LIST, SUBMIT_NEW_CARD } from "./types";
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
			},
		});
	};
};
