import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "Reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { saveStateIntoStorage } from "./server";
import { setIsFetched } from "Actions/actions";

const middleware = applyMiddleware(thunk);

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

//Listen changes and send new state to the storage
store.subscribe(() => {
	const { isFetched } = store.getState();
	//If it's the first request, set a flag and return, so as not to send the same state back to the storage
	if (!isFetched) {
		store.dispatch(setIsFetched());
		return;
	}
	//Take a new state and save it in the storage
	const { boards, lists, cards } = store.getState();
	saveStateIntoStorage({ boards, lists, cards });
});

export { store };
