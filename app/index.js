import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { Provider } from "react-redux";
import { store } from "./Store";
import { BrowserRouter } from "react-router-dom";
import "./sass/main.scss";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
