import React from "react";
import { connect } from "react-redux";

const SingleCard = ({ title, cardId, sourceListId }) => {
	const handleDragStart = (e) => {
		const data = JSON.stringify({ cardId, sourceListId });

		e.dataTransfer.setData("text/plain", data);
	};

	return (
		<li draggable={true} onDragStart={handleDragStart}>
			{title}
		</li>
	);
};

export default SingleCard;
