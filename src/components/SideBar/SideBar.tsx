import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Logo, Menu, ListItem } from './SideBar.styles';

import calendar from './../../assets/calendar.svg';
import settings from './../../assets/settings-gears.svg';
import logoSiscob from './../../assets/logo_siscob.svg';
import serasa from './../../assets/logo_serasa.svg';

export const SideBar: React.FC = () => {
	const [current, setNavActive] = useState(0);

	const handleMenu = (item: number) => {
		setNavActive(item);
	};

	return (
		<Container className="sidebar">
			<Logo>
				<img src={logoSiscob} alt="" />
			</Logo>
			<Menu>
				<ListItem onClick={() => handleMenu(1)} active={current === 1}> 
					<Link to="/">
						<img src={calendar} alt="" />
					</Link>
				</ListItem>
				<ListItem onClick={() => handleMenu(2)} active={current === 2}> 
					<Link to="/Retorno-Serasa">
						<img src={serasa} alt="" />
					</Link>
				</ListItem>
				<ListItem onClick={() => handleMenu(3)} active={current === 3}>
					<Link to="/">
						<img src={settings} alt="" />
					</Link>
				</ListItem>
			</Menu>
		</Container>
	);
};
