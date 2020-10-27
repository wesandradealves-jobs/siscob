import styled, { css } from 'styled-components';

export const MultiselectSearch = styled.div`
	position: absolute;
	top: -44px;
	background: white;
	width: calc(100% - 30px);
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;	
	svg {
		font-size: 1rem;
		color: gray;
		flex: 0 0 auto;
	}
	padding: 12px 0;
	input {
		flex: 1;
		border: 0;
		color: #E3E8EB;
		font-weight: bold;
		font-size: .8rem;
	}
`;

export const Label = styled.div`

`;

export const List = styled.ul`
	margin: -18px -15px;
	border-radius: 0 0 20px 20px;
	overflow: hidden;

`;

interface ItemProp {
	readonly isSelected: boolean;
}

export const ListItem = styled.li<ItemProp>`
	padding: 17px 30px;
	font-weight: 300;
	font-size: .8rem;
	&:not(:last-child) {
		border-bottom: 1px rgba(0,0,0,.1) solid;
	}
	cursor: pointer;
	${({ isSelected }) =>
		isSelected &&
		css`	
			background: #00959C;
			color: white;
		`}
`;

export const Content = styled.div`
	position: relative;
`;

interface BoxProps {
	readonly completed: boolean;
	isOpen: boolean;
}

export const Box = styled.div<BoxProps>`
	border: 1px solid #7E93954D;
	border-radius: 20px;
	padding: 10px 20px;	
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;	
	color: #7E93954D;
	font-size: 1rem;
	font-weight: 300;
	svg {
		font-size: 1.3rem
	}
	${({ isOpen }) =>
		isOpen &&
		css`
			box-shadow: 0px 0px 20px -15px black;
			border-radius: 20px 20px 0 0
		`}
`;

export const Options = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background: white;
	border: 1px solid #7E93954D;,
	box-shadow: 0px 0px 20px -15px black;
	border-radius: 0 0 20px 20px;
	padding: 17px 15px;
	border-top: 1px whitesmoke solid;
	z-index: 10
`;

export const Footer = styled.div`

`;

export const MultiselectWrapper = styled.div`

`;

export const Title = styled.div`

`;

export const FinishButton = styled.button`

`;

export const SearchInput = styled.input``;
