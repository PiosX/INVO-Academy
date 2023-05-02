import React from "react";
import "./Checkbox.scss";

const Checkbox: React.FC<{
	id: string;
	value: string;
	text: string;
	isChecked: boolean;
	onChecked: () => void;
}> = (props) => {
	return (
		<div className="generator__select-box">
			<input
				type="checkbox"
				id={props.id}
				name={props.id}
				value={props.value}
				className="generator__select-box-input"
				checked={props.isChecked}
				onChange={props.onChecked}
			/>
			<label htmlFor={props.id} className="generator__select-box-text">
				{props.text}
			</label>
		</div>
	);
};

export default Checkbox;
