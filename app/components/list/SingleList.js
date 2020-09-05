import React from "react";
import { connect } from "react-redux";
import Form from "../Form";
import AllCards from "../card/AllCards";
import { submitNewCard } from "Actions/actions";

const SingleList = (props) => {
	const { boardId, listId, title, classProps, submitNewCard } = props;

	return (
		<div className={`${classProps}`}>
			<h4>{title}</h4>
			<Form
				submitAction={(title) => submitNewCard(boardId, listId, title)}
				errorMsg={"You have to name your card"}
				placeholder={"Your card goes here"}
			/>
			<AllCards boardId={boardId} listId={listId} />
		</div>
	);
};

SingleList.defaultProps = {
	classProps: "",
};

export default connect(null, { submitNewCard })(SingleList);
