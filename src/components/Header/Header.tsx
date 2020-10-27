import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Routes, { routesMap, history } from '../../routes/';

import NotificationBell from "../NotificationBell";

import {
	Container,
	Head,
	ListItem,
	DropDown,
	Perfil,
	Nav,
	Avatar,
	Pic,
	InfoCard,
	PageTitle,
	GoBack
	// Search,
} from './Header.styles';

// import iconSearch from './../../assets/Icon_search.svg';
import avatar from './../../assets/user_photo.png';
import notify from './../../assets/ic_notif.svg';
import arrowDown from './../../assets/arrow-down.svg';

export const Header: React.FC = () => {
	var classNames = require('classnames');
	const [headActive, setHeadActive] = useState(-1);
	const [dropDownActive, setDropDownActive] = useState(-1);

	const handleMenu = (item: number) => {
		setHeadActive(item);
	};

	const handleDropDown = (item: number) => {
		setDropDownActive(item);
	};

	const location = useLocation();

	const current = routesMap.filter((route) => {
	  return route.path === location.pathname;
	});

	return (
		<Container className="headerWrapper">
			<Head className="header">
				<Nav className="navigation --header">
					{routesMap.filter((route) => {
					  return route.parent && route.parent.includes('header');
					}).map((value, index) => {
						return <ListItem key={index} onClick={() => handleMenu(index)} active={headActive === index} className={classNames({
					      '--header': true,
					      'active': headActive === index
					    })} ><Link to={value['path']}>{value['label']}</Link></ListItem>
					})}
				</Nav>

				{/* <Search>
					<img src={iconSearch} alt="" />
					<input />
				</Search> */}

				<Perfil className="profile">
					<NotificationBell text={0} leftIcon="fas fa-bell" />
					<InfoCard className="infoCard">
						<p>Marcela Won <small>Analista</small></p>
					</InfoCard>
					<Avatar className="avatar"> 
						<Pic className="picture"> 
							<img src={avatar} alt="" />
						</Pic>
						{/*<button className="arrow"> 
													<i className="fas fa-angle-down"></i>
												</button>*/}
					</Avatar>
				</Perfil>
			</Head>
			<DropDown className="dropdown">
				<Nav className="navigation">
					{routesMap.filter((route) => {
					  return route.parent && route.parent.includes(location.pathname.split('/')[1]);
					}).map((value, index) => {
						return <ListItem key={index} onClick={() => handleDropDown(index)} active={dropDownActive === index} className={dropDownActive === index ? 'active' : ''}><Link to={value['path']}>{value['label']}</Link></ListItem>
					})}
				</Nav>					
			</DropDown>
			{/*<GoBack className="goBack" onClick={() => history.goBack()}><i className="fas fa-angle-left"></i> Voltar para página anterior</GoBack>
						<PageTitle>{current[0].label}</PageTitle>*/}
		</Container>
	);
};
