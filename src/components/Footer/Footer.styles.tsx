import styled from 'styled-components';
import { FlexWrap } from '../../Shared.styles';
import Socials from '../Socials';

export const Wrap = styled(FlexWrap)<{ theme?: string }>`
	color: ${({ theme }) => theme.fg};
	background: ${({ theme }) => theme.bg};
	flex-flow: column nowrap;
	align-items: center;
	text-align: center;
	padding: 2rem;
`;

export const FooterSocials = styled(Socials)`
	justify-content: space-evenly;
`;
