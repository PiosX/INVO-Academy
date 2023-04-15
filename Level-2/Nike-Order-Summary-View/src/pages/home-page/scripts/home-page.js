/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const button = document.querySelector(".order__primary-btn");

const clickHandler = () => {
	button.setAttribute("data-loading", "1");
};

button.addEventListener("click", clickHandler);
