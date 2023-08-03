export interface IForm {
	[key: string]: {
		value: string;
		isValid: boolean;
		errorMessage: string;
	};
}

export interface IBasicValidator {
	[key: string]: (value: string) => boolean | string;
}
