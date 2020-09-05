import React from "react";
import { setArchive } from "Actions/actions";
import { connect } from "react-redux";

const SingleCard = ({ title }) => {
	return <li>{title}</li>;
};

export default SingleCard;
