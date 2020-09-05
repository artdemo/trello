import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<h2>There is no such a page</h2>
			<Link to="/">Home</Link>
		</div>
	);
};

export default ErrorPage;
