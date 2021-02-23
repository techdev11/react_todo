import React from "react";

import "./button.css";

const Button = props => {
	return (
		<div className="btn_primary">
			<button onClick={props.clickHandler}>{props.text}</button>
		</div>
	);
};

export default Button;
