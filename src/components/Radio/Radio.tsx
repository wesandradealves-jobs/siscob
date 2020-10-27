import React from 'react';
import IRadioProps from './Iradio';

import { Label } from './Radio.styles';

export const Radio: React.FC<IRadioProps> = ({ value, name, label }) => {
	return (
		<Label>
			<input type="radio" name={name} value={value} />
			<span></span>
			{label}
		</Label>
	);
};
