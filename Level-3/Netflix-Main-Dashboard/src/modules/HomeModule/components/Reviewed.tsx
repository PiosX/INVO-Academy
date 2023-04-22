import React from "react";
import TVSeries from "./TVSeries";
import { moviesReviewed } from "../data/movie-data";
import SeeAll from "./SeeAll";

const Reviewed = () => {
	return (
		<div className="reviewed movies-holder">
			<TVSeries
				title="Docenione przez krytyków"
				items={moviesReviewed}
				component={<SeeAll />}
				counter={false}
			/>
		</div>
	);
};

export default Reviewed;
