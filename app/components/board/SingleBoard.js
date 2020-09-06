import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateListLink from "../list/CreateListLink";
import Form from "../Form";
import Button from "../Button";
import AllLists from "../list/AllLists";
import ErrorPage from "../ErrorPage";
import { connect } from "react-redux";
import { getStateFromStorage } from "Root/server";
import { submitNewList, setFromStorage } from "Actions/actions";

const SingleBoard = (props) => {
	useEffect(() => {
		const state = getStateFromStorage();
		props.setFromStorage(state);
	}, []);

	const { board, match, submitNewList } = props;

	const [createMode, setCreateMode] = useState(false);

	if (!board) return <ErrorPage />;

	const goToLists = () => {
		setCreateMode(false);
	};
	const goToForm = () => {
		setCreateMode(true);
	};

	return (
		<div>
			<div>
				<h3>{board.title}</h3>
			</div>
			<AllLists boardId={board.id} />
			{createMode ? (
				<Form
					submitAction={(title) => submitNewList(board.id, title)}
					resetAction={goToLists}
					errorMsg="You have to name your new list"
					placeholder={"Name your list"}
				>
					<Button type="reset" classProps="">
						Cancel
					</Button>
				</Form>
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

export default connect(mapStateToProps, { submitNewList, setFromStorage })(
	SingleBoard
);
