import styled, { css } from 'styled-components';

import IButtonProps from './IdefaultButton';

export const Container = styled.button<IButtonProps>`
	width: 130px;
	padding: 10px 20px;
	border: 2px solid #00959c;
	border-radius: 50px;
	background-color: ${({ styleType }) =>
		styleType === 'outline' ? 'transparent' : '#00959C'};
	outline: none;
	cursor: pointer;
	color: ${({ styleType }) =>
		styleType === 'outline' ? '#ff5b22' : '#ffffff'};
	font-weight: 600;
	text-transform: uppercase;
	font-size: 14px;
	text-align: center;
	display: flex;

	${({ styleType }) =>
		styleType === 'secondary' &&
		css`
			background-color: #fff;
			color: #00959c;
			border: none;
			box-shadow: 3px 3px 6px #7e939526;
			justify-content: space-between;
			align-items: center;
			font-size: 1.6rem;
			padding: 1rem 3rem;
			width: unset;
			> svg {
				width: 2.5rem;
				height: 2.5rem;
				margin: 0 1rem;
				fill: #00959c;
			}
		`}
	${({ styleType }) =>
		styleType === 'tertiary' &&
		css`
			background-color: #00959c;
			color: #ffffff;
			border: none;
			box-shadow: 3px 3px 6px #7e939526;
			justify-content: space-between;
			align-items: center;
			font-size: 1.6rem;
			padding: 1rem 3rem;
			width: unset;
			> svg {
				width: 2.5rem;
				height: 2.5rem;
				margin: 0 1rem;
				fill: #ffffff;
			}
		`}
`;
