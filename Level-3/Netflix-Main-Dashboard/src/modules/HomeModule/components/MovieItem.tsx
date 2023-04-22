import React from "react";

const MovieItem: React.FC<{ img: string; alt: string }> = (props) => {
	return (
		<div className="movie">
			<div className="movie__img">
				<img src={props.img} alt={props.alt} />
			</div>
		</div>
	);
};

export default MovieItem;
