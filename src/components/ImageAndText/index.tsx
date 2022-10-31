import React from 'react';
import { Para } from '../../Shared.styles';
import { ImgTextWrap, StyledPicture } from './ImageAndText.styles';
import NiamhMcCooey from '../../../public/niamh-mccooey.jpeg';

type ImageAndTextProps = {
	text: React.ReactElement;
	reverse?: boolean;
};

const ImageAndText = ({ text, reverse }: ImageAndTextProps) => (
	<ImgTextWrap reverse={reverse}>
		<StyledPicture src={NiamhMcCooey} />
		<Para>{text}</Para>
	</ImgTextWrap>
);

export default ImageAndText;
