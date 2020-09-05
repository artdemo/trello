import React, { useEffect, useState } from "react";
import BoardLink from "./BoardLink";
import Form from "../Form";
import Button from "../Button";
import { Link } from "react-router-dom";
import { submitNewBoard } from "Actions/actions";
import { connect } from "react-redux";

const AllBoards = ({ boards, submitNewBoard }) => {
	const [createMode, setCreateMode] = useState(false);

	const goToBoards = () => {
		setCreateMode(false);
	};

	const goToForm = (e) => {
		e.preventDefault();

		setCreateMode(true);
	};

	const renderAllBoards = () => {
		if (!boards.length) return null;

		return boards.map((board) => {
			return (
				<Link key={board.id} to={`/${board.id}`}>
					<BoardLink>
						<h4>{board.title}</h4>
					</BoardLink>
				</Link>
			);
		});
	};

	return (
		<div>
			{createMode ? (
				<BoardLink>
					<h4>Creating a board</h4>
					<Form
						classProps=""
						submitAction={(title) => submitNewBoard(title)}
						resetAction={goToBoards}
						errorMsg="You have to name your new board"
						placeholder="Add a new board"
					>
						<Button type="reset" classProps="" name="Cancel" />
						<Button type="submit" classProps="" name="Submit" />
					</Form>
				</BoardLink>
			) : (
				<a href="#" onClick={goToForm}>
					<BoardLink>
						<h4>Create new board...</h4>
					</BoardLink>
				</a>
			)}
			{renderAllBoards()}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		boards: state.boards,
	};
}

export default connect(mapStateToProps, {
	submitNewBoard,
})(AllBoards);
