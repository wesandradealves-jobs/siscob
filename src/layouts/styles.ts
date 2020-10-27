import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: stretch;	
	background-color: #F2F4F4;
	overflow: hidden;
`;

export const Content = styled.div`
	flex: 1;
	overflow: hidden;
	padding-top: 105px;
	.content-inner {
		padding: 0 48px 48px 48px;
		position: relative;
		z-index: 1;
		height: 100vh;
		overflow: auto;
	}
`;


export const ContentHeader = styled.div`

`;

export const PageTitle = styled.h2`
	padding: 21px 0;
	color: #7E9395;
	font-weight: bold;
`;

export const GoBack = styled.a`
	cursor: pointer;
	padding: 20px 0 0;
	font-size: .9rem;
	font-weight: 300;
	text-decoration: underline;
	color: #7E9395;
	display: block;
`;