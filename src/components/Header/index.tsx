import React from 'react';
import Button from '../Button';
import Title from '../Title';
import { HeaderWrap } from './Header.styles';

export type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => (
	<HeaderWrap>
		<Title text={title} />
		<Button label='Get started' kind='secondary' size='small' />
	</HeaderWrap>
);

export default Header;
