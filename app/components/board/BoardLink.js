import React from "react";

const BoardLink = (props) => {
	return <div className={`${props.classProps}`}>{props.children}</div>;
};

BoardLink.defaultProps = {
	classProps: "",
};

export default BoardLink;
