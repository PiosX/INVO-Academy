/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import "./Length.scss";

const Length: React.FC<{
	onChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
	const [number, setNumber] = useState("6");
	const [styleBar, setStyleBar] = useState(`linear-gradient(
		to right,
		var(--color-primary) 18.75%,
		var(--color-grey-slider) 18.75%
	)`);

	const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const value: number = parseFloat(target.value);
		const valueMin: number = parseFloat(target.min);
		const valueMax: number = parseFloat(target.max);
		const calculatedValue =
			(100 * (value - valueMin)) / (valueMax - valueMin);
		setNumber(target.value);
		strengthHandle(target.value);
		setStyleBar(
			`linear-gradient(
				to right,
				var(--color-primary) ${calculatedValue}%,
				var(--color-grey-slider) ${calculatedValue}%
			)`
		);
	};
	const strengthHandle = (numberVal: string) => {
		const number = parseInt(numberVal);
		const boxes = document.querySelectorAll(
			".generator__strenght-level-box"
		);
		const lv2 = document.querySelector(".box-level-2")!;
		const lv3 = document.querySelector(".box-level-3")!;
		const lv4 = document.querySelector(".box-level-4")!;
		if (number >= 4 && number <= 6) {
			lv2.setAttribute("data-level", "0");
			lv3.setAttribute("data-level", "0");
			lv4.setAttribute("data-level", "0");
			boxes.forEach((box) => {
				if (box.getAttribute("data-level") == "1") {
					box.setAttribute("data-color", "3");
				}
			});
		} else if (number >= 7 && number <= 8) {
			lv2.setAttribute("data-level", "1");
			lv3.setAttribute("data-level", "0");
			lv4.setAttribute("data-level", "0");
			boxes.forEach((box) => {
				if (box.getAttribute("data-level") == "1") {
					box.setAttribute("data-color", "3");
				} else {
					box.setAttribute("data-color", "3");
				}
			});
		} else if (number >= 9 && number <= 10) {
			lv3.setAttribute("data-level", "1");
			lv4.setAttribute("data-level", "0");
			boxes.forEach((box) => {
				if (box.getAttribute("data-level") == "1") {
					box.setAttribute("data-color", "1");
				} else {
					box.setAttribute("data-color", "3");
				}
			});
		} else {
			lv4.setAttribute("data-level", "1");
			boxes.forEach((box) => {
				if (box.getAttribute("data-level") == "1") {
					box.setAttribute("data-color", "2");
				} else {
					box.setAttribute("data-color", "3");
				}
			});
		}
	};

	return (
		<div className="generator__length">
			<div className="generator__length-box">
				<h2 className="generator__length-box-text">Character Lengh</h2>
				<p className="generator__length-box-number">{number}</p>
			</div>
			<div className="generator__length-slider">
				<input
					type="range"
					min={4}
					max={16}
					defaultValue={6}
					id="slider"
					className="generator__length-slider-input"
					onInput={inputValueHandler}
					onChange={props.onChanged}
					style={{
						background: styleBar,
					}}
				/>
			</div>
		</div>
	);
};

export default Length;
