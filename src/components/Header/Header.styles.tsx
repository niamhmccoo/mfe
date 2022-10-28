import styled from 'styled-components';
import { FlexWrap } from '../../shared.styles';

export const HeaderWrap = styled(FlexWrap)<{ theme?: string }>`
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg};
	flex-flow: column nowrap;
	align-items: center;
`;
