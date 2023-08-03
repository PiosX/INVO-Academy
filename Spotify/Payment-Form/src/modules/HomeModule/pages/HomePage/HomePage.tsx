import React from "react";
import "./HomePage.scss";
import { SimpleForm } from "../../components/SimpleForm";
import { Background } from "../../components/Background";

export const HomePage: React.FC = () => {
	return (
		<div className="home">
			<div className="payment">
				<SimpleForm />
				<Background />
			</div>
		</div>
	);
};
