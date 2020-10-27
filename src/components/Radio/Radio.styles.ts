import styled from 'styled-components';

export const Label = styled.label`
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 12px;
	cursor: pointer;
	color: #7e9395;
	font-size: 14px;
	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		&:checked {
			& ~ span {
				background-color: #fff;
				border: 1px solid #31c6d3;
				&:after {
					content: '';
					display: block;
					width: 7px;
					height: 7px;
					background-color: #31c6d3;
					position: absolute;
					top: 3px;
					left: 3px;
					border-radius: 50%;
				}
			}
		}
	}
	span {
		position: relative;
		height: 15px;
		width: 15px;
		border: 1px solid #7e9395;
		background-color: #fff;
		border-radius: 50%;
		margin-right: 10px;
	}
`;
