import React from "react";
import MovieInfo from "./MovieInfo";

const MovieItem: React.FC<{ img: string; alt: string; hasInfo: boolean }> = (
	props
) => {
	return (
		<div className="movie">
			<div className="movie__img">
				<img src={props.img} alt={props.alt} />
			</div>
			{props.hasInfo && <MovieInfo />}
		</div>
	);
};

export default MovieItem;
