import { SelectHTMLAttributes } from 'react';

interface OptionsItems {
	value?: string;
	label?: string;
}

export default interface ISelectProps
	extends SelectHTMLAttributes<HTMLSelectElement> {
	width?: string;
	options: OptionsItems[];
	label?: string;
	helperClass?: string;
}
