import styled, { keyframes } from 'styled-components';

export const Container = styled.div`

`;

export const LoaderWrapper = styled.div`

`;

export const Section = styled.div`

`;

export const FiltroWrapper = styled.div`
	background-color: white;
	border-radius: 10px;
	padding: 32px calc(32px/2);
	margin-bottom: 32px
`;

export const FieldGroup = styled.div`
	display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;
    > * {
    	flex: 1;
		&:nth-child(3n+2) {
		    flex-grow: .7;
		}    	
    }
	.label {
		margin-bottom: 8px;
		font-size: .9rem;
		color: #7E9395
	}    
	.btn {
		padding: 10px 20px;
		background-color: #31C6D3;
		color: white;
		text-transform: uppercase;
		font-weight: 300;
		font-size: .9rem;
		letter-spacing: 0.7px;
	}
`;

export const FieldArea = styled.div`
	padding: calc(32px/2);
`;

export const Label = styled.div`

`;

export const ActionArea = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 15px;
`;

/* Table styles */
export const TableContainer = styled.div`
	.anyResults {
		text-align: center;
		font-size: .8rem;
		font-weight: 300;
		color: gray;		
	}
`;

export const CustTable = styled.table`

`;

export const TableRow = styled.tr`

`;

export const RowItem = styled.td`

`;

export const HeaderItem = styled.td`

`;

export const PaginationWrapper = styled.div`

`;

const fadeObjLeft = keyframes`
    from {
      left: 0;
      opacity: (0);
    }
    to {
      left: -5rem;
      opacity: (1);
    }
  `;

export const MenuActionsWrapper = styled.ul`

`;

export const MenuAction = styled.li`

`;

export const SectionTitle = styled.h3`
	font-weight: bold;
	color: #7E9395;
	font-size: 1rem;
	margin-bottom: 8px;
`;
