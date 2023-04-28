import React from "react";
import TVSeries from "./TVSeries";
import { moviesPopular } from "../data/movie-data";
import SeeAll from "./SeeAll";

const Popular = () => {
	return (
		<div className="popular movies-holder">
			<TVSeries
				title="Popularne teraz"
				items={moviesPopular}
				component={<SeeAll />}
				counter={false}
				isTopList={false}
			/>
		</div>
	);
};

export default Popular;
