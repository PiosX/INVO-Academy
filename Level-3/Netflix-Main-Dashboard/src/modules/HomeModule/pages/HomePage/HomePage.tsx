import React from "react";
import Header from "../../components/Header";
import Reviewed from "../../components/Reviewed";
import "./HomePage.scss";
import Popular from "../../components/Popular";
import WatchAgain from "../../components/WatchAgain";
import TopToday from "../../components/TopToday";
import TopSeries from "../../components/TopSeries";

// interface IProps {
// 	msg: string;
// }

export const HomePage: React.FC = () => {
	return (
		<div className="home-page">
			<Header />
			<div className="movies-wrapper">
				<Reviewed />
				<Popular />
				<WatchAgain />
			</div>
			<div className="top-movies-wrapper">
				<TopToday />
				<TopSeries />
			</div>
		</div>
	);
};
