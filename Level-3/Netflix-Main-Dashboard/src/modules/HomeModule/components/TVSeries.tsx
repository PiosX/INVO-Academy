import React from "react";
import MovieItem from "./MovieItem";
import MovieInterface from "../interfaces/MovieInterface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const TVSeries: React.FC<{
	title: string;
	items: MovieInterface[];
	component: JSX.Element;
	counter: boolean;
	isTopList: boolean;
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
				{!props.isTopList && (
					<Swiper
						slidesPerView={"auto"}
						spaceBetween={8}
						loop={true}
						className="swiper swiper-normal"
						navigation={true}
						modules={[Navigation]}
						onAfterInit={(swiper) => {
							swiper.navigation.prevEl.classList.add(
								"swiper-button-disabled"
							);
						}}
						onSlideChange={(swiper) => {
							swiper.navigation.prevEl.classList.remove(
								"swiper-button-disabled"
							);
						}}
					>
						{/* Duplikacja kodu z powodu buga Swiper'a. Ucina infinite loop + są dziwne przeskoki. Z duplikacją działa. */}
						{props.items.map((movie) => (
							<SwiperSlide
								key={movie.id}
								className="swiper__item"
							>
								<MovieItem
									img={movie.img}
									alt={movie.alt}
									hasInfo={true}
								/>
							</SwiperSlide>
						))}
						{props.items.map((movie) => (
							<SwiperSlide
								key={movie.id}
								className="swiper__item"
							>
								<MovieItem
									img={movie.img}
									alt={movie.alt}
									hasInfo={true}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}
				{props.isTopList && (
					<Swiper
						slidesPerView={"auto"}
						breakpoints={{
							375: {
								spaceBetween: 11,
								slidesOffsetAfter: 130,
							},
							834: {
								spaceBetween: 56,
							},
						}}
						spaceBetween={56}
						className="swipertop"
						navigation={true}
						modules={[Navigation]}
						slidesOffsetAfter={56}
					>
						{props.items.map((movie, index) => (
							<SwiperSlide
								key={movie.id}
								className="swipertop__item"
							>
								{props.counter && topSeries(index)}
								<MovieItem
									img={movie.img}
									alt={movie.alt}
									hasInfo={false}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</div>
	);
};

export default TVSeries;
