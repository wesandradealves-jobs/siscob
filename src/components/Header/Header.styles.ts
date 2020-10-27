import styled from 'styled-components';

interface IListItem {
	active?: boolean;
	onClick?: any;
}

export const Container = styled.header`
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    padding-left: 100px;
    position: absolute;
`;

export const Search = styled.div`

`;

export const Head = styled.div`
	background: white;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: stretch;
	overflow: hidden;
	color: #7E9395;
	top: 0;
	left: 0;
	width: 100%;	
`;

export const ListItem = styled.div<IListItem>`
	position: relative;
	a {
		font-weight: ${({ active }) => (active ? 'bold' : '300')};
	}	
	&.--header {
		a {
			color: ${({ active }) => (active ? '#00959C' : 'inherit')};
		}		
		&::after {
			bottom: 0;
			text-decoration: none;
			color: ${({ active }) => (active ? '#00959C' : '#7E9395')};
		}
	}
	&:after {
		display: ${({ active }) => (active ? 'block' : 'none')};
		content: '';
		width: 100%;
		height: 0.3rem;
		background-color: #00959c;
		position: absolute;
		bottom: 1.2rem;
		left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		color: #00959c;
		&:after {
			display: block;
			content: '';
			display: block;
			position: absolute;
			left: 0;
			width: 0;
			height: 3px;
			bottom: 0;
			background: #00959C;
			transition: 500ms linear width;
		}	
		&:hover,
		&.active {
			&::after {
				width: 100%;
			}
		}
	}
`;

export const Perfil = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-end;
	align-items: center;
	padding: 8px 0;
	.infoCard {
		margin-left: 8px;
		p {
			line-height: 1.2;
			text-align: right;
			font-size: .9rem;
			small {
				display: block;
				font-size: 80%;
			}			
		}
	}
`;

export const DropDown = styled.div`
	background: transparent linear-gradient(179deg, #31C6D3 0%, #063793 100%) 0% 0% no-repeat padding-box;
	>nav {
		color: rgba(255,255,255,.7);
		font-weight: 300;
		font-size: .9rem;
		padding: 0 24px;
		> * {
			padding: 8px 24px;
			a {
				color: inherit;
			}
			&:hover,
			&.active {
				a {
					color: white;
				}
			}
			&::after {
				display: none!important
			}			
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	flex: 1;
	&.--header {
		padding-right: 10px;
		> * {
			height: 100%;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 0 48px;
			font-size: .9rem;
		}
	}
`;

export const Pic = styled.div`
	border-radius: 999px;
	height: 54px;
	width: 54px;
	overflow: hidden;
	margin-right: 10px;
	img {
		object-fit: cover;
	}
`;

export const Avatar = styled.div`
	display: flex;
	felx-flow: row wrap;
	justify-content: flex-end;
	align-items: center;
	.arrow {
		background: none;
		border: 0;
		color: inherit;
		font-size: .9rem
	}
	padding: 0 10px;
`;

export const InfoCard = styled.nav`

`;

export const PageTitle = styled.h2`
	padding: 21px 48px;
	color: #7E9395;
	font-weight: bold;
`;

export const GoBack = styled.a`
	cursor: pointer;
	padding: 20px 48px 0;
	font-size: .9rem;
	font-weight: 300;
	text-decoration: underline;
	color: #7E9395;
	display: block;
`;