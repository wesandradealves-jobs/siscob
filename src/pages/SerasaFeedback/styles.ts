import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const TopSection = styled.div`
	> h2 {
		color: #7e9395;
		font-size: 2.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}
`;

export const Container = styled.div``;

export const FiltroWrapper = styled.div`
	max-width: 100rem;
	background-color: #fff;
	border-radius: 10px;
	padding: 2rem 3rem;
`;

export const FieldArea = styled.div`
	margin: 0 3rem;
`;

export const FieldGroup = styled.div`
	display: flex;
	margin: 2rem 0;
	align-items: flex-end;
`;

export const Label = styled.div`
	color: #7e9395;
	font-size: 1.8rem;
	font-weight: 600;
	margin-bottom: 1rem;
	margin-right: 1rem;
`;

export const ActionArea = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	button {
		background-color: #31c6d3;
		color: #fff;
	}
`;

export const DatesWrapper = styled.div`
	display: flex;
	align-items: center;

	label {
		margin-right: 1rem;
	}
	.react-datepicker {
		font-size: 2rem !important;
	}

	.react-datepicker__current-month {
		font-size: 2rem !important;
	}

	.react-datepicker__header {
		padding-top: 6px !important;
	}

	.react-datepicker__navigation {
		top: 13px !important;
	}

	.react-datepicker__day-name,
	.react-datepicker__day {
		margin: 1.2rem !important;
	}
`;

export const Dpicker = styled(DatePicker)`
	border: 1px solid #7e93954d;
	border-radius: 20px;
	width: 129px;
	padding: 8px 10px;
	text-align: center;
	color: #7e9395;
	margin-right: 2rem;
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

export const RowItem = styled.td`
	padding: 2rem 1rem;
	.row-select > div {
		width: 15rem;
	}
`;

export const HeaderItem = styled.td`
	color: #7e9395;
	padding: 2rem 1rem;
	font-weight: 700;
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
