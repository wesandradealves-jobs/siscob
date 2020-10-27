import { ButtonHTMLAttributes } from 'react';

export default interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	leftIcon?: string;
	text?: any;
	onClick?: any;
}