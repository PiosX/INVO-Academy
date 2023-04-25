import React from "react";
import TVSeries from "./TVSeries";
import { moviesTopSeries } from "../data/movie-data";

const TopSeries = () => {
	return (
		<div className="top-today top-movies">
			<TVSeries
				title="Top 10 seriali w Polsce dzisiaj"
				items={moviesTopSeries}
				component={<div></div>}
				counter={true}
			/>
		</div>
	);
};

export default TopSeries;
