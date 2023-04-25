import React from "react";
import rightArrowIcon from "../../../assets/images/right-arrow.svg";

const Arrows = () => {
	return (
		<>
			<div className="movies__list-box movies__list-box--left">
				<div className="movies__list-box-button">
					<img
						src={rightArrowIcon}
						alt="arrow-right"
						className="movies__list-box-button-img"
					/>
				</div>
			</div>
			<div className="movies__list-box movies__list-box--right">
				<div className="movies__list-box-button">
					<img
						src={rightArrowIcon}
						alt="arrow-right"
						className="movies__list-box-button-img"
					/>
				</div>
			</div>
		</>
	);
};

export default Arrows;
