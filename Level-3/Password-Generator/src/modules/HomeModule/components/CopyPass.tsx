import React from "react";
import "./CopyPass.scss";
import copyImg from "../../../assets/images/copy.svg";

const CopyPass: React.FC<{ onClicked: () => void }> = (props) => {
	return (
		<div className="generator__copy">
			<button
				className="generator__copy-password"
				onClick={props.onClicked}
			>
				<div className="generator__copy-password-img">
					<img src={copyImg} alt="copy icon" />
				</div>
				<div className="generator__copy-password-text">
					Copy Password
				</div>
			</button>
		</div>
	);
};

export default CopyPass;
