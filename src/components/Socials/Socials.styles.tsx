import styled from 'styled-components';
import { FlexWrap } from '../../Shared.styles';

export const StyledAnchor = styled.a`
	font-family: 'Helvetica Neue';
	text-decoration: none;
	color: inherit;
`;

export const Wrap = styled(FlexWrap)<{ theme?: string }>`
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg};
	width: 8rem;
	padding: 0;
`;
