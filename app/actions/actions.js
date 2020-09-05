import { SUBMIT_NEW_BOARD, SUBMIT_NEW_LIST } from "./types";
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
