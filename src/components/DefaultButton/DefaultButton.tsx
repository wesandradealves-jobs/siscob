import React from 'react';
import IButtonProps from './IdefaultButton';

import { Container } from './DefaultButton.styles';

export const DefaultButton: React.FC<IButtonProps> = ({
	styleType = 'primary',
	leftIcon,
	text = 'Consultar',
	rightIcon,
	onClick,
	className = '' 
}) => {
	return (
		<Container className={className} onClick={onClick} styleType={styleType}>
			{leftIcon} {text} {rightIcon}
		</Container>
	);
};
