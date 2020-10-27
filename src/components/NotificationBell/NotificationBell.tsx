import React from 'react';
import INotificationBellProps from './INotificationBell';

import { Icon, Counter } from './NotificationBell.styles';

export const NotificationBell: React.FC<INotificationBellProps> = ({
	leftIcon,
	text,
	onClick,
}) => {
	return (
		<Icon onClick={onClick}>
			<span className={leftIcon}></span> 
			<Counter>{text}</Counter> 
		</Icon>
	);
};
