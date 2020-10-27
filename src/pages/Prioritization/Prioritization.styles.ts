import styled from 'styled-components';

import DatePicker from 'react-datepicker';

import Pages from '@material-ui/lab/Pagination';

interface Itab {
	active?: boolean;
	onClick?: any;
}

export const FilterBar = styled.div`
	width: 90%;
`;

export const TabMenu = styled.div``;

export const TabItem = styled.button<Itab>`
	background-color: ${({ active }) => (active ? '#ffffff' : '#e5e9ea')};

`;

export const TabContent = styled.div<Itab>`
	display: ${({ active }) => (active ? 'block' : 'none')};

`;

export const Search = styled.div`

`;

export const Dpicker = styled(DatePicker)`

`;

export const SelectArea = styled.div``;
export const SelectAreaTemp = styled.div`

`;

export const InputArea = styled.div`

`;

export const RadioArea = styled.div`

`;

export const DateArea = styled.div`

`;

export const Label = styled.label`

`;

export const Flex = styled.label`

`;

export const TableContainer = styled.div`
	
`;

export const TableFooter = styled.div`
	
`;

export const Pagination = styled(Pages)`
	
`;
