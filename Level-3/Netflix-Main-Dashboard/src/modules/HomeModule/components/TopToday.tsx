import React from "react";
import TVSeries from "./TVSeries";
import { moviesTopToday } from "../data/movie-data";

const TopToday = () => {
	return (
		<div className="top-today top-movies">
			<TVSeries
				title="Top 10 seriali w Polsce dzisiaj"
				items={moviesTopToday}
				component={<div></div>}
				counter={true}
				isTopList={true}
			/>
		</div>
	);
};

export default TopToday;
