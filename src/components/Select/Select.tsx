import React from 'react';
import ISelectProps from './Iselect';

import { Container, SelectArea, SelectInput } from './Select.styles';

export const Select: React.FC<ISelectProps> = ({
	options,
	label,
	helperClass,
	onChange,
	name,
}) => {
	return (
		<Container className={helperClass}>
			{label}
			<SelectArea>
				<SelectInput name={name} onChange={onChange}>
					{options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</SelectInput>
			</SelectArea>
		</Container>
	);
};
