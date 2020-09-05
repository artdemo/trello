import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "Reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

//Preloaded state
const preloadedState = {
	boards: [{ id: 0, title: "First board" }],
	lists: [{ id: 0, title: "First list", boardId: 0 }],
	cards: [{ id: 0, title: "First cards", boardId: 0, listId: 0 }],
};
//

const store = createStore(
	rootReducer,
	preloadedState,
	composeWithDevTools(applyMiddleware(thunk))
);

export { store };
