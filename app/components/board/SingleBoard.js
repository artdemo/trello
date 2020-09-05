import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import { connect } from "react-redux";

const SingleBoard = (props) => {
	const { board, match } = props;

	const [createMode, setCreateMode] = useState(false);

	if (!board) return <ErrorPage />;

	const goToForm = () => {
		setCreateMode(true);
	};

	return (
		<div>
			<div>
				<h3>{board.title}</h3>
			</div>
			{createMode ? (
				<div>Creating mode</div>
			) : (
				<CreateListLink handleClick={goToForm} />
			)}
		</div>
	);
};

function mapStateToProps(state, props) {
	return {
		board: state.boards[props.match.params.id],
	};
}

export default connect(mapStateToProps)(SingleBoard);
