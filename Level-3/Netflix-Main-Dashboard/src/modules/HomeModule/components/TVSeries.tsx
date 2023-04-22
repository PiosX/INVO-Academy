import React from "react";
import MovieItem from "./MovieItem";
import MovieInterface from "../interfaces/MovieInterface";

const TVSeries: React.FC<{
	title: string;
	items: MovieInterface[];
	component: JSX.Element;
	counter: boolean;
}> = (props) => {
	return (
		<div className="movies">
			<div className="movies__desc">
				<p className="movies__desc-title">{props.title}</p>
				{props.component}
			</div>
			<div className="movies__list">
				{props.items.map((movie, index) => (
					<div key={movie.id}>
						{props.counter && (
							<p className="movies__list-counter">{index + 1}</p>
						)}
						<MovieItem img={movie.img} alt={movie.alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default TVSeries;
