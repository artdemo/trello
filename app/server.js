//Emulate server requests by holding the state in the local storage
const initialState = {
	boards: [],
	lists: [],
	cards: [],
};

export const getStateFromStorage = () => {
	const storage = localStorage.getItem("storage");

	const state = storage === null ? initialState : JSON.parse(storage);

	return state;
};

export const saveStateIntoStorage = (state) => {
	localStorage.setItem("storage", JSON.stringify(state));
};
