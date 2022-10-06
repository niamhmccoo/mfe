import React from 'react';
import { ButtonElement } from './Button.styles';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
	label: string;
	dark: boolean;
	size: ButtonSize;
	disabled?: boolean;
	kind: ButtonKind;
};

const Button = ({ label, dark, size, disabled, kind }: ButtonProps) => {
	return (
		<ButtonElement dark={dark} size={size} disabled={disabled} kind={kind}>
			{label}
		</ButtonElement>
	);
};

export default Button;
