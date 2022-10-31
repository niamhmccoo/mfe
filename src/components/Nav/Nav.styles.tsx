import styled from 'styled-components';
import { Button, FlexWrap } from '../../Shared.styles';

export const Wrap = styled.div<{ theme?: string }>`
	padding: 1rem 2rem;
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg || 'none'};
	align-items: center;
`;

export const Border = styled.div`
	display: grid;
	grid-template-columns: 3fr 1.5fr;
	border-bottom: ${({ theme }) => `solid 1px ${theme.bg}}`};
`;

export const HomeTab = styled(Button)`
	background: ${({ theme }) => theme.bg || 'none'};
	justify-self: start;
`;

export const NavTabs = styled(FlexWrap)``;

export const Tab = styled(Button)<{ theme?: string }>`
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg || 'none'};
`;
