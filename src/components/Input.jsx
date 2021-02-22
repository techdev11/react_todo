import React from "react";

const Input = props => {
	return (
		<div>
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
