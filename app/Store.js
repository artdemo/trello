import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "Reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { saveStateIntoStorage } from "./server";

const middleware = applyMiddleware(thunk);

//Preloaded state
// const preloadedState = {
// 	boards: [{ id: 0, title: "First board" }],
// 	lists: [
// 		{ id: 0, title: "First list", boardId: 0 },
// 		{ id: 1, title: "Second list", boardId: 0 },
// 	],
// 	cards: [
// 		{ id: 0, title: "First card", boardId: 0, listId: 0, isArchived: false },
// 		{ id: 1, title: "Second card", boardId: 0, listId: 0, isArchived: false },
// 		{ id: 2, title: "Third card", boardId: 0, listId: 1, isArchived: false },
// 		{ id: 3, title: "Fourth card", boardId: 0, listId: 1, isArchived: false },
// 	],
// };
//

const store = createStore(
	rootReducer,
	// preloadedState,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
	const { boards, lists, cards } = store.getState();
	saveStateIntoStorage({ boards, lists, cards });
});

export { store };
