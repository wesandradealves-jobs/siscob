import React, { useEffect, useRef, InputHTMLAttributes } from 'react';

import { useField } from '@unform/core';

import { Container } from './InputText.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

export const InputText: React.FC<InputProps> = ({ name, ...rest }) => {
	const inputRef = useRef(null);
	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			<input ref={inputRef} {...rest} />
		</Container>
	);
};
