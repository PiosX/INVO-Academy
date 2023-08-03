import React, { useState, useMemo } from "react";
import "./SimpleForm.styles.scss";
import { IForm } from "../interfaces/IForm";
import { IBasicValidator } from "../interfaces/IForm";

export const SimpleForm: React.FC = () => {
	const [form, setForm] = useState<IForm>({
		fullName: {
			value: "",
			isValid: false,
			errorMessage: "",
		},
		cardNumber: {
			value: "",
			isValid: false,
			errorMessage: "",
		},
		expiryDate: {
			value: "",
			isValid: false,
			errorMessage: "",
		},
		CVV: {
			value: "",
			isValid: false,
			errorMessage: "",
		},
	});
	const isFormValid = useMemo(
		() => Object.values(form).every(({ isValid }) => isValid),
		[form]
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isFormValid) {
			console.log(form);
		}
	};

	const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		const validator = basicValidator[name];
		let isValid = true;
		let errorMessage = "";

		if (validator) {
			const validatorValue = validator(value);

			if (typeof validatorValue === "string") {
				isValid = !validatorValue;
				errorMessage = validatorValue;
			}
		}

		setForm({
			...form,
			[name]: { ...form[name], value, isValid, errorMessage },
		});
	};

	const basicValidator: IBasicValidator = {
		fullName: (value: string) =>
			/([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,} )([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,})/.test(
				String(value)
			) || "Full name is incorrect",
		cardNumber: (value: string) =>
			/^\d{16}$/.test(String(value)) || "Card number is incorrect",
		expiryDate: (value: string) =>
			/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(String(value)) ||
			"Date is incorrect",
		CVV: (value: string) =>
			/^\d{3}$/.test(String(value)) || "CVV is incorrect",
	};

	return (
		<div className="form-container">
			<h1 className="form-container__title">Add your informations</h1>
			<form className="simple-form" onSubmit={handleSubmit}>
				<input
					className="simple-form__input"
					type="text"
					name="fullName"
					placeholder="Name on card"
					onChange={handleFormChange}
					required
				/>
				{form["fullName"].errorMessage && (
					<p className="simple-form__error-message">
						{form["fullName"].errorMessage}
					</p>
				)}
				<input
					className="simple-form__input"
					type="text"
					name="cardNumber"
					placeholder="Card number"
					onChange={handleFormChange}
					required
					minLength={16}
					maxLength={16}
				/>
				{form["cardNumber"].errorMessage && (
					<p className="simple-form__error-message">
						{form["cardNumber"].errorMessage}
					</p>
				)}
				<div className="simple-form__flex-container">
					<input
						className="simple-form__input"
						type="text"
						name="expiryDate"
						placeholder="Expiry date (MM/YY)"
						onChange={handleFormChange}
						required
						minLength={4}
						maxLength={4}
					/>

					<input
						className="simple-form__input"
						type="text"
						name="CVV"
						placeholder="CVV"
						onChange={handleFormChange}
						required
						minLength={3}
						maxLength={3}
					/>
				</div>
				{form["expiryDate"].errorMessage && (
					<div className="error-container">
						<p className="simple-form__error-message">
							{form["expiryDate"].errorMessage}
						</p>
					</div>
				)}
				{form["CVV"].errorMessage && (
					<div className="error-container">
						<p className="simple-form__error-message">
							{form["CVV"].errorMessage}
						</p>
					</div>
				)}
				<button
					className="simple-form__button"
					type="submit"
					disabled={!isFormValid}
				>
					Next step
				</button>
			</form>
		</div>
	);
};
