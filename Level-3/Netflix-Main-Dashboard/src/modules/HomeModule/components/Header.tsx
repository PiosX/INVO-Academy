import React from "react";

import "./Header.scss";

import netflixImg from "../../../assets/images/netflix.svg";
import play from "../../../assets/images/play-header.svg";
import more from "../../../assets/images/more-header.svg";
import wednesday from "../../../assets/images/wednesday.jpg";
import wednesdayTitle from "../../../assets/images/wednesday-title.png";

const Header = () => {
	return (
		<header className="header">
			<div className="header__bgc">
				<img
					className="header__bgc-img"
					src={wednesday}
					alt="Wednesday Series"
				/>
			</div>
			<div className="header__nav">
				<div className="header__nav-logo">
					<img
						className="header__nav-logo-img"
						src={netflixImg}
						alt="Netflix"
					/>
				</div>
			</div>
			<div className="header__content">
				<div className="header__content-top">
					<div className="header__content-top-box">
						<p className="header__content-top-box-text header__content-top-box-text--10">
							TOP
						</p>
						<p className="header__content-top-box-text header__content-top-box-text--16">
							10
						</p>
					</div>
					<p className="header__content-top-desc">
						Nr 5 wśród seriali dzisiaj
					</p>
				</div>
				<div className="header__content-title">
					<img
						src={wednesdayTitle}
						alt="Wednesday Title"
						className="header__content-title-img"
					/>
				</div>
				<div className="header__content-desc">
					Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi
					śledztwo w sprawie serii zabójstw, przysparzając sobie
					nowych przyjaciół i wrogów w Akademii Nevermore.
				</div>
				<div className="header__content-buttons">
					<div className="header__content-buttons-play">
						<div className="header__content-buttons-play-box">
							<img
								src={play}
								alt="play icon"
								className="header__content-buttons-play-box-icon"
							/>
						</div>
						<p className="header__content-buttons-play-text">
							Odtwórz
						</p>
					</div>
					<div className="header__content-buttons-more">
						<div className="header__content-buttons-more-box">
							<img
								src={more}
								alt="more icon"
								className="header__content-buttons-more-box-icon"
							/>
						</div>
						<p className="header__content-buttons-more-text">
							Więcej informacji
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
