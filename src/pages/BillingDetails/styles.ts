import styled from 'styled-components';

interface checkBoxProps {
	active?: boolean;
	all?: boolean;
	onClick?: any;
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	h2 {
		color: #7e9395;
		font-size: 20px;
		margin-bottom: 10px;
		font-weight: 600;
	}
`;

export const FilterBar = styled.div`
	background-color: #fff;
	padding: 30px;
	min-height: 220px;
`;

export const Box = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	div {
		margin-right: 65px;
	}
	&:first-child {
		margin-bottom: 30px;
		justify-content: space-between;
		div {
			margin: 0;
		}
	}
`;

export const Item = styled.div`
	color: #7e9395;
	font-size: 16px;
	span {
	}
	p {
		margin-top: 8px;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 0px;
	}
`;

export const FilterCheck = styled.div`
	min-height: 220px;
	display: flex;
	flex-wrap: wrap;
`;

export const Resume = styled.div`
	width: 100%;
`;

export const Check = styled.div`
	margin-left: 30px;
`;

export const CheckBox = styled.div<checkBoxProps>`
	display: block;
	width: 15px;
	height: 15px;
	border-radius: 2px;
	background: ${({ active }) => (active ? '#31C6D3' : 'transparent')};
	border: ${({ active }) =>
		active ? '1px solid #7E93954D' : '1px solid #7e9395'};
`;

export const Checks = styled.div`
	display: flex;
	label {
		min-width: 180px;
		position: relative;
		cursor: pointer;
		user-select: none;
		margin-right: 20px;
		input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
			&:checked ~ span {
				background-color: #31c6d3;
				color: #fff;
			}
		}
		span {
			display: block;
			min-width: 180px;
			text-align: center;

			background-color: #ffffff;
			color: #7e9395;
			font-size: 14px;
			font-weight: 600;
			padding: 10px 20px;
			border-radius: 50px;
			box-shadow: 3px 3px 6px #7e939526;
		}
	}
`;

export const TableFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 15px 0;
	button {
		border-radius: 20px;
		border: 0;
		background-color: #fff;
		color: #00959c;
		font-weight: 600;
		padding: 8px 15px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		font-size: 14px;
		img {
			margin-left: 10px;
		}
	}
	span {
		color: #00959c;
		font-size: 14px;
		font-weight: 600;
		text-transform: uppercase;
	}
`;

export const Pagination = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	li {
		width: 32px;
		height: 32px;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 1px;
		color: #7e9395;
		font-size: 12px;
		font-weight: 600;
	}
`;

export const Tabela = styled.div`
	table {
		border-collapse: collapse;
		width: 100%;
		thead,
		tbody {
			tr {
				background-color: #e5e9ea;
				&:first-child {
					background-color: #f2f4f4;
				}
				&:nth-child(even) {
					background-color: #fff;
				}
				th {
					padding: 15px 8px;
					text-align: left;
					color: #7e9395;
					font-weight: 600;
					font-size: 12px;
				}
				td {
					padding: 15px 8px;
					text-align: left;
					color: #3f3f3f;
					font-size: 12px;
					text-transform: uppercase;
					img {
						margin-left: 10px;
					}
					button {
						border: 0;
						background: transparent;
						color: #3f3f3f;
					}
				}
			}
		}
		tfoot {
			tr {
				td {
					color: #00959c;
					font-size: 13px;
					font-weight: 600;
					text-transform: uppercase;
					padding: 15px 0;
					p {
						color: #7e9395;
						font-weight: normal;
					}

					button {
						border-radius: 20px;
						border: 0;
						background-color: #fff;
						color: #00959c;
						font-weight: 600;
						padding: 8px 15px;
						display: flex;
						align-items: center;
						text-transform: uppercase;
						font-size: 14px;
						img {
							margin-left: 10px;
						}
					}
				}
			}
		}
	}
`;

export const HeadTable = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 0;
	button {
		border-radius: 20px;
		border: 0;
		background-color: #fff;
		color: #00959c;
		font-weight: 600;
		padding: 8px 15px;
		display: flex;
		align-items: center;
		text-transform: uppercase;
		font-size: 12px;
		img {
			margin-left: 10px;
			width: 15px;
			margin-top: 0 !important;
		}
	}
`;

export const Search = styled.div`
	width: 35%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 3px 3px 6px #7e939526;
	border-radius: 50px;
	opacity: 1;
	padding: 0 10px;

	input {
		width: 85%;
		background: transparent;
		border: 0;
		padding: 8px 10px;
		margin-left: 10px;
	}
	img {
		width: 18px !important;
		margin-top: 0 !important;
	}
`;
