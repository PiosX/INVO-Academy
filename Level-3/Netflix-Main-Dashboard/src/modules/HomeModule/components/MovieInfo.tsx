import React from "react";
import playButton from "../../../assets/images/play.svg";
import addButton from "../../../assets/images/add.svg";
import dislikeButton from "../../../assets/images/dislike.svg";
import likeButton from "../../../assets/images/like.svg";
import loveitButton from "../../../assets/images/loveit.svg";
import moreButton from "../../../assets/images/more.svg";

const MovieInfo: React.FC = () => {
	return (
		<div className="movie__box">
			<div className="movie__box-buttons">
				<div className="movie__box-buttons-left">
					<div className="movie__box-buttons-left-play">
						<img
							src={playButton}
							alt="play"
							className="movie__box-buttons-left-play-img"
						/>
					</div>
					<div className="movie__box-buttons-left-add size">
						<img
							src={addButton}
							alt="add"
							className="movie__box-buttons-left-add-img"
						/>
					</div>
					<div className="movie__box-buttons-left-mark">
						<div className="movie__box-buttons-left-mark-dislike size">
							<div className="movie__box-buttons-left-mark-dislike-box">
								<p className="movie__box-buttons-left-mark-dislike-box-text">
									To nie dla mnie
								</p>
								<div className="movie__box-buttons-left-mark-dislike-box-polygon"></div>
							</div>
							<img
								src={dislikeButton}
								alt="dislike"
								className="movie__box-buttons-left-mark-dislike-img"
							/>
						</div>
						<div className="movie__box-buttons-left-mark-like size">
							<div className="movie__box-buttons-left-mark-like-box">
								<p className="movie__box-buttons-left-mark-like-box-text">
									Podoba mi się
								</p>
								<div className="movie__box-buttons-left-mark-like-box-polygon"></div>
							</div>
							<img
								src={likeButton}
								alt="like"
								className="movie__box-buttons-left-mark-like-img"
							/>
						</div>
						<div className="movie__box-buttons-left-mark-loveit size">
							<div className="movie__box-buttons-left-mark-loveit-box">
								<p className="movie__box-buttons-left-mark-loveit-box-text">
									Uwielbiam to
								</p>
								<div className="movie__box-buttons-left-mark-loveit-box-polygon"></div>
							</div>
							<img
								src={loveitButton}
								alt="love it"
								className="movie__box-buttons-left-mark-loveit-img"
							/>
						</div>
					</div>
				</div>
				<div className="movie__box-buttons-right">
					<img
						src={moreButton}
						alt="more"
						className="movie__box-buttons-right-img"
					/>
				</div>
			</div>
			<div className="movie__box-time">
				<p className="movie__box-time-desc">W róg</p>
				<p className="movie__box-time-number">24 z 58 min</p>
			</div>
			<div className="movie__box-line">
				<div className="movie__box-line-progress"></div>
			</div>
		</div>
	);
};

export default MovieInfo;
