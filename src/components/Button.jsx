import React from "react";

const Input = props => {
	return (
		<div>
			<button onClick={props.clickHandler}>{props.text}</button>
		</div>
	);
};

export default Input;
