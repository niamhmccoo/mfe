import React from 'react';
import { ButtonWrap, ButtonElement } from './Button.styles';

export type ButtonKind = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
	label: string;
	size: ButtonSize;
	disabled?: boolean;
	kind: ButtonKind;
};

const Button = ({ label, size, disabled, kind }: ButtonProps) => {
	return (
		<ButtonWrap>
			<ButtonElement size={size} disabled={disabled} kind={kind}>
				{label}
			</ButtonElement>
		</ButtonWrap>
	);
};

export default Button;
