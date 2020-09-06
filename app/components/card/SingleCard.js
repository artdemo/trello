import React from "react";
import { setArchive } from "Actions/actions";
import { connect } from "react-redux";

const SingleCard = ({
	title,
	cardId,
	sourceListId,
	setArchive,
	isArchived,
}) => {
	const handleDragStart = (e) => {
		const data = JSON.stringify({ cardId, sourceListId });

		e.dataTransfer.setData("text/plain", data);
	};

	const handleClick = () => {
		setArchive(cardId);
	};

	return (
		<li draggable={true} onDragStart={handleDragStart}>
			<span>{title}</span>
			<button onClick={handleClick}>{`${isArchived}`}</button>
		</li>
	);
};

export default connect(null, { setArchive })(SingleCard);
