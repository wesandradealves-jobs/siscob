import styled from 'styled-components';

import Pages from '@material-ui/lab/Pagination';

export const Container = styled.div`
	margin: 65px 0;
	h1 {
		color: #7e9395;
		font-size: 22px;
		font-weight: 600;
		letter-spacing: 0px;
		margin: 60px 0 30px 0;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		thead {
			tr {
				background-color: #f2f4f4;
				th {
					padding: 15px 8px;
					text-align: left;
					color: #7e9395;
					font-weight: 600;
					font-size: 12px;
				}
			}
		}
		tbody {
			tr {
				background-color: #e5e9ea;
				&:nth-child(even) {
					background-color: #fff;
				}
				td {
					padding: 15px 8px;
					text-align: left;
					color: #3f3f3f;
					font-size: 12px;
					text-transform: uppercase;
				}
			}
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

export const Pagination = styled(Pages)`
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
		button {
			border-radius: 0 !important;
			span {
				border-radius: 0 !important;
			}
		}
	}
`;
