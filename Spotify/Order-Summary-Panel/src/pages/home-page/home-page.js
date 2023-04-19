/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "./home-page.scss";

const button = document.querySelector(".order__primary-btn");

let isLoading = false;

const clickHandler = () => {
	if (isLoading) {
		console.log("The payment is already processing");
		return;
	}
	button.setAttribute("data-loading", "1");
	button.setAttribute("disabled", "disabled");

	isLoading = true;

	return isLoading;
};

button.addEventListener("click", clickHandler);
