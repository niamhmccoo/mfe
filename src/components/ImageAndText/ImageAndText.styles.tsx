import styled from 'styled-components';
import { Picture, FlexWrap } from '../../Shared.styles';

export const StyledPicture = styled(Picture)`
	width: 16rem;
`;

export const ImgTextWrap = styled(FlexWrap)<{ reverse?: boolean }>`
	flex-flow: ${({ reverse }) => (reverse ? 'row-reverse' : 'inherit')};
	align-self: center;
	align-items: center;
	justify-content: start;
	padding: 2rem;

	p {
		text-align: ${({ reverse }) => (reverse ? 'end' : 'inherit')};
	}
`;
