import React, { useContext } from 'react';

import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	Redirect,
} from 'react-router-dom';

import { AuthContext } from './../context/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
	isPrivate?: boolean;
	component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
	isPrivate = false,
	component: Component,
	...rest
}) => {
	const { userName } = useContext(AuthContext);
	return (
		<ReactDOMRoute
			{...rest}
			render={() => {
				return isPrivate === !!userName ? (
					<Component />
				) : (
					<Redirect to={{ pathname: isPrivate ? '/' : '/priorizacao' }} />
				);
			}}
		/>
	);
};

export default Route;
