import { InputHTMLAttributes } from 'react';

export default interface IRadioProps
	extends InputHTMLAttributes<HTMLInputElement> {
	value?: string;
	name?: string;
	label?: string;
}
