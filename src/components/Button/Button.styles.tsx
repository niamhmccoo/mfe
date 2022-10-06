import styled, { css } from 'styled-components';
import type { ButtonKind, ButtonSize } from '.';

export const ButtonWrap = styled.div<{ dark: boolean }>`
	padding: 1rem;
	height: 100%;
`;

export const ButtonElement = styled.button<{
	size: ButtonSize;
	dark: boolean;
	kind: ButtonKind;
}>`
	outline: 0;
	letter-spacing: 0;
	align-items: center;
	display: inline-flex;
	text-decoration: none;
	border-radius: 0.75rem;
	font-family: 'Helvetica Neue';
	font-size: ${({ size }) =>
		size === 'small' ? '1rem' : size === 'medium' ? '1.25rem' : size === 'large' && '2rem'};
	padding: ${({ size }) =>
		size === 'small' ? '0.5rem' : size === 'medium' ? '1rem' : size === 'large' && '1.4rem'};
	background: ${({ kind }) =>
		kind === 'primary'
			? 'rgb(26, 115, 232)'
			: kind === 'secondary'
			? 'rgb(226, 238, 252)'
			: kind === 'danger' && 'rgb(252, 232, 232)'};
	color: ${({ kind }) =>
		kind === 'primary'
			? '#ffff'
			: kind === 'secondary'
			? 'rgb(26, 115, 232)'
			: kind === 'danger' && 'rgb(198, 27, 27)'};
	border: ${({ kind }) =>
		kind === 'primary'
			? 0
			: kind === 'secondary'
			? 'solid 1px rgb(26, 115, 232)'
			: kind === 'danger' && 'solid 1px rgb(198, 27, 27)'};
	${({ dark }) =>
		dark &&
		css`
			background: rgb(70, 69, 69);
			color: #ffff;
		`}

	&:active {
		/* box-shadow: 0 0 0 2px var(--fc-button-pressed-border-color); */
	}

	&:hover:not(:disabled) {
		text-decoration: none;
		/* background-color: var(--fc-button-bg-color-hover); */
	}

	&:not(:disabled) {
		cursor: pointer;
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`;
