import React from "react";
import { connect } from "react-redux";
import Form from "../Form";
import AllCards from "../card/AllCards";
import { submitNewCard, replaceCard } from "Actions/actions";

const SingleList = (props) => {
	const {
		boardId,
		listId,
		title,
		classProps,
		submitNewCard,
		replaceCard,
	} = props;

	const handleDrop = (e, id) => {
		e.preventDefault();

		const data = e.dataTransfer.getData("text/plain");

		const { sourceListId, cardId } = JSON.parse(data);
		//If it's the same list that card is taken from, do nothing
		if (sourceListId === listId) return;

		replaceCard(cardId, listId);
	};

	const handleDragOver = (e) => e.preventDefault();

	return (
		<div
			className={`${classProps}`}
			onDragOver={handleDragOver}
			onDrop={(e) => handleDrop(e, listId)}
		>
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

export default connect(null, { submitNewCard, replaceCard })(SingleList);
