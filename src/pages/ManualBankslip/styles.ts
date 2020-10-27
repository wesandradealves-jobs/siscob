import styled from 'styled-components/macro';
import DatePicker from 'react-datepicker';

export const TableSection = styled.div``;

export const Container = styled.div`
	> h2 {
		color: #7e9395;
		font-size: 2.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}
`;

export const FiltroWrapper = styled.div`
	background-color: #fff;
	border-radius: 10px;
	min-height: 30rem;
	padding: 2rem 3rem;
`;

export const FieldArea = styled.div`
	margin: 0 3rem;

	&.streched {
		align-self: center;
		justify-content: center;
		flex: 2;
	}
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

export const Dpicker = styled(DatePicker)`
	border: 1px solid #7e93954d;
	border-radius: 20px;
	width: 129px;
	padding: 8px 10px;
	text-align: center;
	color: #7e9395;
	margin-right: 2rem;
`;

export const DatesWrapper = styled.div`
	display: flex;
	align-items: center;
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

export const RadioWrapper = styled.div`
	display: flex;
	align-self: center;
	margin-top: 3rem;
`;

export const RadioOption = styled.input`
	display: none;

	&:checked + label > span::after {
		opacity: 1;
	}
`;

export const RadioLabel = styled.label`
	font-size: 2.2rem;
	margin-right: 2rem;
	color: #7e9395;
	cursor: pointer;
	display: flex;
	align-items: center;

	span {
		height: 2.5rem;
		width: 2.5rem;
		display: block;
		border: 0.4rem solid #31c6d3;
		border-radius: 50%;
		margin-right: 0.5rem;
		position: relative;

		&::after {
			content: '';
			display: block;
			height: 0.9rem;
			width: 0.9rem;
			border-radius: 100%;
			position: absolute;
			transform: translate(-50%, -50%);
			top: 50%;
			left: 50%;
			background-color: #31c6d3;
			opacity: 0;
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
