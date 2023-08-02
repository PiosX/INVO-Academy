import Swal from "sweetalert2";

export const UserFeedbackModal = () => {
	let userFeedbackModalClosedTimestamp;

	if (userFeedbackModalClosedTimestamp) {
		const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
		const currentDate = new Date();
		const threeDaysAgo = currentDate.getTime() - threeDaysInMilliseconds;
		if (userFeedbackModalClosedTimestamp >= threeDaysAgo) {
			// If it has been less than 3 days, return to exit the function
			// without displaying the modal
			return;
		}
	}

	Swal.fire({
		template: "#user-feedback-modal",
		showConfirmButton: false,
		width: "496px",
		padding: 0,
		customClass: {
			container: "user-feedback-modal",
		},
		background: "var(--background-color)",
		color: "var(--on-background-color)",
		showCloseButton: true,
		allowEnterKey: false,
		closeButtonHtml: '<img src="/assets/icons/close-icon.svg" alt="X" />',
		didClose: () => {
			// Save the current timestamp when the modal is closed
			userFeedbackModalClosedTimestamp = Date.now();
		},
	});

	UserFeedbackComponent();
};

export const UserFeedbackComponent = () => {
	const userFeedbackComponent = document.querySelector(
		".user-feedback-component"
	);
	const allRatesTiles = userFeedbackComponent.querySelectorAll(
		".user-feedback-component__single-rate-tile"
	);
	const confirmButton = document.querySelector(".btn-primary");
	const answerPanel = document.querySelector(
		".user-feedback-component__rate"
	);
	const answerInput = document.querySelector(
		".user-feedback-component__rate-input"
	);
	let currentRating;

	addListenersToAllRatesTiles();

	function afterRatingChanged(singleRateTile) {
		disselectOtherRatings(singleRateTile);
		setProperButtonState(currentRating);
	}

	function updateInput() {
		answerInput.addEventListener("input", () => {
			if (answerInput.value.length > 0) {
				confirmButton.removeAttribute("disabled");
			}
		});
	}
	updateInput();

	function setProperButtonState() {
		if (!currentRating) {
			confirmButton.setAttribute("disabled", true);
			answerPanel.removeAttribute("data-answer");
		} else {
			answerInput.value = "";
		}
	}

	function addListenersToAllRatesTiles() {
		allRatesTiles.forEach((singleRateTile) => {
			singleRateTile.addEventListener("click", () => {
				singleRateTile.toggleAttribute("data-selected");
				answerPanel.setAttribute("data-answer", true);
				if (singleRateTile.hasAttribute("data-selected")) {
					currentRating = singleRateTile.getAttribute("data-rate");
				} else {
					currentRating = null;
				}

				submitRate();
				afterRatingChanged(singleRateTile);
			});
		});
	}

	function submitRate() {
		confirmButton.addEventListener("click", () => {
			confirmButton.setAttribute("data-sended", true);
		});
	}

	function disselectOtherRatings(clickedTile) {
		allRatesTiles.forEach((singleRateTile) => {
			if (singleRateTile != clickedTile) {
				singleRateTile.removeAttribute("data-selected");
			}
		});
	}
};
