import React from "react";
import "./Strenght.scss";

const Strenght = () => {
	return (
		<div className="generator__strenght">
			<div className="generator__strenght-box">
				<p className="generator__strenght-box-title">Strenght</p>
				<h2 className="generator__strenght-box-text">
					Low password strength
				</h2>
			</div>
			<div className="generator__strenght-level">
				<div
					className="generator__strenght-level-box box-level-1"
					data-level="1"
					data-color="3"
				></div>
				<div
					className="generator__strenght-level-box box-level-2"
					data-level="0"
					data-color="0"
				></div>
				<div
					className="generator__strenght-level-box box-level-3"
					data-level="0"
					data-color="0"
				></div>
				<div
					className="generator__strenght-level-box box-level-4"
					data-level="0"
					data-color="0"
				></div>
			</div>
		</div>
	);
};

export default Strenght;
