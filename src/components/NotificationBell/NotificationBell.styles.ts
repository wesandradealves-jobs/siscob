import styled, { css } from 'styled-components';

export const Icon = styled.i`
	position: relative;
	font-style: initial;
	margin-right: 10px;
`;

export const Counter = styled.small`
	position: absolute;
	top: 0;
	right: -4px;
	display: flex;
	flex-flow: column;
	justiy-content: center;
	align-items: center;
	font-size: 52%;
	color: white;
	font-weight: bold;
	background-color: orangered;
	height: 10px;
	width: 10px;
	border-radius: 999px;
	line-height: 1.1;
`;
