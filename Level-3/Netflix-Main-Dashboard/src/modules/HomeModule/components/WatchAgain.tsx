import React from "react";
import TVSeries from "./TVSeries";
import { moviesWatchAgain } from "../data/movie-data";
import SeeAll from "./SeeAll";

const WatchAgain = () => {
	return (
		<div className="watch-again movies-holder">
			<TVSeries
				title="Obejrzyj ponownie"
				items={moviesWatchAgain}
				component={<SeeAll />}
				counter={false}
			/>
		</div>
	);
};

export default WatchAgain;
