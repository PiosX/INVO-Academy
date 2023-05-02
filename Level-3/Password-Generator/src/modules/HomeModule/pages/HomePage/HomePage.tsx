import React, { useState } from "react";
import "./HomePage.scss";

import Length from "../../components/Length";
import Checkbox from "../../components/Checkbox";
import Strenght from "../../components/Strenght";
import GeneratedPass from "../../components/GeneratedPass";
import CopyPass from "../../components/CopyPass";

interface RandomFunc {
	lower: () => string;
	upper: () => string;
	number: () => string;
	symbol: () => string;
}

export const HomePage: React.FC = () => {
	const [checkedUp, setCheckedUp] = useState(true);
	const [checkedLow, setCheckedLow] = useState(false);
	const [checkedNum, setCheckedNum] = useState(true);
	const [checkedSym, setCheckedSym] = useState(true);
	const [lengthVal, setLengthVal] = useState(6);
	const [refreshPass, setRefreshPass] = useState(false);
	let password = "";
	const hasLower = checkedLow ? 1 : 0;
	const hasUpper = checkedUp ? 1 : 0;
	const hasNumber = checkedNum ? 1 : 0;
	const hasSymbol = checkedSym ? 1 : 0;

	const checkerUpHandler = () => {
		if ((checkedLow || checkedNum || checkedSym) == true)
			setCheckedUp(!checkedUp);
	};
	const checkerLowHandler = () => {
		if ((checkedUp || checkedNum || checkedSym) == true)
			setCheckedLow(!checkedLow);
	};
	const checkerNumHandler = () => {
		if ((checkedLow || checkedUp || checkedSym) == true)
			setCheckedNum(!checkedNum);
	};
	const checkerSymHandler = () => {
		if ((checkedLow || checkedNum || checkedUp) == true)
			setCheckedSym(!checkedSym);
	};

	const getLengthValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const value: number = parseFloat(target.value);
		setLengthVal(value);
	};
	const getRandomLower = () => {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	};
	const getRandomUpper = () => {
		return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	};
	const getRandomNumber = () => {
		return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	};
	const getRandomSymbol = () => {
		const symbols = "!@#$%^&*(){}[]=/,.";
		return symbols[Math.floor(Math.random() * symbols.length)];
	};
	const randomFunc: any = {
		hasLower: getRandomLower,
		hasUpper: getRandomUpper,
		hasNumber: getRandomNumber,
		hasSymbol: getRandomSymbol,
	};

	const refreshPasswordHandler = () => {
		setRefreshPass(!refreshPass);
	};

	const copyPassword = () => {
		const passwordEl = document.querySelector(
			".generator__password-gen-text"
		);
		const textarea = document.createElement("textarea");
		const password = passwordEl?.textContent;

		if (!password) {
			return;
		}

		textarea.value = password;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		textarea.remove();
	};

	const generatePassword = (
		hasLower: number,
		hasUpper: number,
		hasNumber: number,
		hasSymbol: number,
		length: number
	) => {
		let generatedPassword = "";
		const typesCount = hasLower + hasUpper + hasNumber + hasSymbol;
		const typesArr = [
			{ hasLower },
			{ hasUpper },
			{ hasNumber },
			{ hasSymbol },
		].filter((item) => Object.values(item)[0]);

		for (let i = 0; i < length; i += typesCount) {
			typesArr.forEach((type) => {
				const funcName = Object.keys(type)[0];
				generatedPassword += randomFunc[funcName as keyof RandomFunc]();
			});
		}

		password = generatedPassword.slice(0, length);
		return password;
	};
	generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengthVal);
	return (
		<div className="generator">
			<h1 className="generator__title">Password Generator</h1>
			<Length onChanged={getLengthValue} />
			<div className="generator__select">
				<Checkbox
					id="uppercase"
					value="upper"
					text="Include Uppercase Letter"
					isChecked={checkedUp}
					onChecked={checkerUpHandler}
				/>
				<Checkbox
					id="lowercase"
					value="lower"
					text="Include Lowercase Letter"
					isChecked={checkedLow}
					onChecked={checkerLowHandler}
				/>
				<Checkbox
					id="numbers"
					value="num"
					text="Include Numers"
					isChecked={checkedNum}
					onChecked={checkerNumHandler}
				/>
				<Checkbox
					id="symbols"
					value="sym"
					text="Include Symbols"
					isChecked={checkedSym}
					onChecked={checkerSymHandler}
				/>
			</div>
			<Strenght />
			<GeneratedPass pass={password} onClicked={refreshPasswordHandler} />
			<CopyPass onClicked={copyPassword} />
		</div>
	);
};
