import styled from 'styled-components';

export const Container = styled.div`
	max-width: 115rem;
	> h2 {
		color: #7e9395;
		font-size: 2.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	> p {
		color: #00959c;
		font-size: 1.7rem;
	}
`;

export const Actions = styled.div`
	display: flex;
	margin-top: 2rem;

	.right-aligned {
		display: flex;
		flex: 1;
		justify-content: flex-end;

		button {
			margin: 0 1rem;
		}
	}
`;

/* Table styles */
export const TableContainer = styled.div`
	margin-top: 3rem;
`;

export const CustTable = styled.table`
	width: 100%;
	font-size: 1.7rem;
	text-align: left;
	border-spacing: 0px;
`;

export const TableRow = styled.tr`
	color: #3f3f3f;
	cursor: pointer;

	&:nth-child(even) {
		background-color: #fff;
	}

	&:nth-child(odd) {
		background-color: #e5e9ea;
	}
	&:hover {
		background-color: #e2f4f5;
	}
`;

export const Totalizador = styled.tr`
	background-color: #7e9395;
	color: #fff;
`;

export const TotalizadorItem = styled.td`
	padding: 1rem;
`;

export const RowItem = styled.td`
	padding: 2rem 1rem;
`;

export const HeaderItem = styled.td`
	color: #7e9395;
	padding: 2rem 1rem;
	font-weight: 700;
`;

export const Tick = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	border: 1px solid #7e9395;
	border-radius: 2px;

	&.selected {
		background-color: #31c6d3;
		border: none;
	}
`;

export const PaginationWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: flex-end;
	.MuiPaginationItem-root {
		font-size: 1.8rem !important;
		margin: 0 !important;
		border-radius: 0 !important;
		border: 1px solid #edeeee !important;
		color: #7e9395 !important;
		font-weight: 600 !important;
		font-family: 'Open Sans', sans-serif !important ;
	}

	.MuiPaginationItem-page.Mui-selected {
		background-color: #edeeee !important;
	}

	.MuiPaginationItem-ellipsis {
		border: none !important;
	}
`;
