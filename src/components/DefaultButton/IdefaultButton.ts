import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'outline' | 'secondary' | 'tertiary';

export default interface IButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	styleType?: ButtonType;
	leftIcon?: any;
	rightIcon?: any;
	text?: string;
	onClick?: any;
}
