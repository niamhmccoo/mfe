import React from 'react';
import { FlexWrap, Para } from '../../Shared.styles';
import { StyledPicture } from './ImageAndText.styles';
import NiamhMcCooey from '../../../public/niamh-mccooey.jpeg';

type ImageAndTextProps = {
	text: string;
};

const ImageAndText = ({ text }: ImageAndTextProps) => (
	<FlexWrap>
		<StyledPicture src={NiamhMcCooey} />
		<Para>{text}</Para>
	</FlexWrap>
);

export default ImageAndText;
