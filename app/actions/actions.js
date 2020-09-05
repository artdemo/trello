import { SUBMIT_NEW_BOARD } from "./types";
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
