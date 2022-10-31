import styled from 'styled-components';

export const FlexWrap = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	padding: 1rem 0.5rem;
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg || 'none'};
`;

export const Button = styled.button<{ theme?: string }>`
	font-size: var(--remFontSize);
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg};
	text-decoration: none;
	letter-spacing: 0;
	border: none;
	outline: 0;
	padding: 0;
`;

export const Para = styled.p`
	font-size: var(--remFontSize);
	padding: 0 2rem;
	margin: 0;
`;

export const Picture = styled.img`
	display: block;
`;
