import styled from 'styled-components';

export const TitleWrap = styled.div<{ theme?: string; background?: string }>`
	color: ${({ theme }) => theme.fg};
	background: ${({ background, theme }) => (background === '' ? theme.bg : background)};
	font-family: 'Helvetica Neue';
	padding: 2rem;
`;
