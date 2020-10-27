import React from 'react';

import { 
	Container, 
	Content, 
	ContentHeader,
	PageTitle,
	GoBack	 
} from './styles';

import Header from './../components/Header';
import SideBar from './../components/SideBar';

import { Link, useLocation } from 'react-router-dom';

import Routes, { routesMap, history } from '../routes/';

const Layout: React.FC = ({ children }) => {
	const location = useLocation();

	const current = routesMap.filter((route) => {
	  return route.path === location.pathname;
	});
		
	return (
		<Container className="dashboard">
			<SideBar />
			<Content className="content"> 
				<Header />
				<div className="content-inner"> 
					<ContentHeader> 
						<GoBack className="goBack" onClick={() => history.goBack()}><i className="fas fa-angle-left"></i> Voltar para página anterior</GoBack>
						<PageTitle>{current[0].label}</PageTitle>
					</ContentHeader>
					{children}
				</div>
			</Content>
		</Container>
	);
};

export default Layout;
