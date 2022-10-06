import React from 'react';
import { TitleWrap } from './Title.styles';

type TitleProps = {
	text: string;
};
const Title = ({ text }: TitleProps) => (
	<TitleWrap>
		<h1>{text}</h1>
	</TitleWrap>
);

export default Title;
