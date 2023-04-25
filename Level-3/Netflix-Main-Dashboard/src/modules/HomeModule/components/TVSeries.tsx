import React from "react";
import MovieItem from "./MovieItem";
import MovieInterface from "../interfaces/MovieInterface";
import Arrows from "./Arrows";

const TVSeries: React.FC<{
	title: string;
	items: MovieInterface[];
	component: JSX.Element;
	counter: boolean;
}> = (props) => {
	const topSeries = (index: number) => {
		let element = <p className="movies__list-counter">{index + 1}</p>;
		if (index === 0) {
			element = (
				<p className="movies__list-counter movies__list-counter--top1">
					{index + 1}
				</p>
			);
		} else if (index === 1) {
			element = (
				<p className="movies__list-counter movies__list-counter--top2">
					{index + 1}
				</p>
			);
		} else if (index === 2) {
			element = (
				<p className="movies__list-counter movies__list-counter--top3">
					{index + 1}
				</p>
			);
		} else {
			element = <p className="movies__list-counter">{index + 1}</p>;
		}
		return element;
	};

	return (
		<div className="movies">
			<div className="movies__desc">
				<p className="movies__desc-title">{props.title}</p>
				{props.component}
			</div>
			<div className="movies__list">
				<Arrows />
				{props.items.map((movie, index) => (
					<div key={movie.id}>
						{props.counter && topSeries(index)}
						<MovieItem img={movie.img} alt={movie.alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default TVSeries;
