import React from "react";

import "./input.css";

const Input = props => {
	return (
		<div className="Input">
			<input
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.changeHandler}
				autoComplete="off"
			/>
		</div>
	);
};

export default Input;
