import React from "react";
import "./GeneratedPass.scss";
import refreshImg from "../../../assets/images/refresh.svg";

const GeneratedPass: React.FC<{ pass: string; onClicked: () => void }> = (
	props
) => {
	return (
		<div className="generator__password">
			<div className="generator__password-gen">
				<h2 className="generator__password-gen-text">{props.pass}</h2>
			</div>
			<div className="generator__password-img" onClick={props.onClicked}>
				<img src={refreshImg} alt="refresh icon" />
			</div>
		</div>
	);
};

export default GeneratedPass;
