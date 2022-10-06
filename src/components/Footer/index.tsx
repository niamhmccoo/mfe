import React from 'react';
import Socials from '../Socials';
import LinkedIn from '../../../public/linkedin.svg';
import Twitter from '../../../public/twitter.svg';
import { Para } from '../../Shared.styles';
import { Wrap } from './Footer.styles';

type FooterProps = {
	text: 'string';
};

const socials = [
	{
		src: LinkedIn,
		alt: 'LinkedIn logo',
		url: 'https://www.linkedin.com/in/niamh-mccooey-104ba6120/',
	},
	{
		src: Twitter,
		alt: 'Twitter logo',
		url: 'https://twitter.com/niamhmccoo',
	},
];

const Footer = ({ text }: FooterProps) => (
	<Wrap>
		<Para>{text}</Para>
		<Socials socials={socials} />
	</Wrap>
);

export default Footer;
