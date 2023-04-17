/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const button = document.querySelectorAll(".more-button");
const loadMenu = document.querySelectorAll(".content__artbox-artist-menu");

const clickHandler = (e) => {
	const menu = e.currentTarget.parentNode.nextElementSibling;

	if (menu.getAttribute("data-show") == 0) {
		loadMenu.forEach((menu) => {
			menu.setAttribute("data-show", "0");
		});
		menu.setAttribute("data-show", "1");
	} else {
		menu.setAttribute("data-show", "0");
	}
};

button.forEach((btn) => btn.addEventListener("click", clickHandler));
