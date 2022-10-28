import styled from 'styled-components';
import type { ButtonKind, ButtonSize } from '.';

export const ButtonWrap = styled.div<{ theme?: string }>`
	padding: 1rem;
	height: 100%;
	color: ${({ theme }) => theme.fg || 'inherit'};
	background: ${({ theme }) => theme.bg || 'inherit'};
`;

export const ButtonElement = styled.button<{
	size: ButtonSize;
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
		size === 'small'
			? `var(--remFontSize)`
			: size === 'medium'
			? '1.25rem'
			: size === 'large' && '2rem'};
	padding: ${({ size }) =>
		size === 'small'
			? '1rem 1.5rem;'
			: size === 'medium'
			? '1.5rem 2rem'
			: size === 'large' && '2rem 2.5rem'};
	background: ${({ kind }) =>
		kind === 'primary'
			? 'rgb(105, 85, 250)'
			: kind === 'secondary'
			? 'rgba(105, 85, 250, 0.1)'
			: kind === 'danger' && 'rgb(252, 232, 232)'};
	color: ${({ kind }) =>
		kind === 'primary'
			? '#ffff'
			: kind === 'secondary'
			? 'rgb(105, 85, 250)'
			: kind === 'danger' && 'rgb(198, 27, 27)'};
	border: ${({ kind }) =>
		kind === 'primary'
			? 0
			: kind === 'secondary'
			? 'solid 1px rgb(105, 85, 250)'
			: kind === 'danger' && 'solid 1px rgb(198, 27, 27)'};
	color: 'inherit';
	background: 'inherit';

	&:hover:not(:disabled) {
		text-decoration: none;
	}

	&:not(:disabled) {
		cursor: pointer;
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`;
