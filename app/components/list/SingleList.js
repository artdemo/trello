import React from "react";
import { connect } from "react-redux";

const SingleList = (props) => {
	const { title, classProps } = props;

	return (
		<div className={`${classProps}`}>
			<h4>{title}</h4>
		</div>
	);
};

SingleList.defaultProps = {
	classProps: "",
};

export default SingleList;
