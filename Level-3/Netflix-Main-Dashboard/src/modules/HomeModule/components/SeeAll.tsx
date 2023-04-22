import React from "react";
import rightArrowIcon from "../../../assets/images/right-arrow.svg";

const SeeAll = () => {
	return (
		<div className="movies__desc-all">
			<a href="#" className="movies__desc-all-link">
				Zobacz wszystkie
			</a>
			<div className="movies__desc-all-arrow">
				<img
					src={rightArrowIcon}
					alt="right arrow"
					className="movies__desc-all-arrow-icon"
				/>
			</div>
		</div>
	);
};

export default SeeAll;
