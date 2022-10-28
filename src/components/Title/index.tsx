import React from 'react';
import { TitleWrap } from './Title.styles';

type TitleProps = {
	text: string;
	background?: string;
};
const Title = ({ text, background }: TitleProps) => (
	<TitleWrap background={background}>
		<h1>{text}</h1>
	</TitleWrap>
);

export default Title;
