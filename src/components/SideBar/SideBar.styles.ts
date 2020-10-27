import styled from 'styled-components';

interface IListItem {
	active?: boolean;
	onClick?: any;
}

export const Container = styled.aside`
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: stretch;
	width: 100px;
	flex: 0 0 auto;
	background-color: white;
	box-shadow: 0px 0px 20px -20px black;
	z-index: 100;
`;

export const Logo = styled.h1`
	flex: 0 0 auto;
	padding: 30px 0;
	text-align: center;
`;

export const Menu = styled.ul`
	flex: 1;
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	> li {
		text-align: center;
		padding: 30px 0;
		width: 100%;
	}
`;

export const ListItem = styled.li<IListItem>`
	img {
		filter: ${({ active }) => (active ? 'brightness(.5)' : 'initial')} 
	}
`;