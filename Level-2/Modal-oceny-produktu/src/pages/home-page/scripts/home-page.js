/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/index.scss";

const numbers = document.querySelectorAll(".modal__points__point");
const button = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");

let target, user_rating, isEnabled;

const clickNumberHandler = (e) => {
	numbers.forEach((number) => {
		number.classList.remove("addColor");
	});
	e.currentTarget.classList.add("addColor");
	button.classList.add("addButtonColor");
	if (target === e.currentTarget) {
		e.currentTarget.classList.remove("addColor");
		button.classList.remove("addButtonColor");
		target = 0;
		isEnabled = false;
	} else {
		target = e.currentTarget;
		user_rating = e.target.textContent;
		isEnabled = true;
	}

	return target, user_rating, isEnabled;
};

const clickButtonHandler = () => {
	if (isEnabled && button.classList.contains("addButtonColor")) {
		alert(`Dziękujemy za ocenę produktu ${user_rating}`);
	} else if (!button.classList.contains("addButtonColor") && isEnabled) {
		alert("Błąd");
	} else if (button.classList.contains("addButtonColor") && !isEnabled) {
		alert("Błąd");
	}
};

const modalShowupHandler = () => {
	setTimeout(() => {
		modal.classList.add("modalEffect");
	}, 3000);
};

numbers.forEach((number) => {
	number.addEventListener("click", clickNumberHandler);
});
button.addEventListener("click", clickButtonHandler);
addEventListener("DOMContentLoaded", modalShowupHandler);
