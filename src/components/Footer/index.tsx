import React from 'react';

import LinkedIn from '../../../public/linkedin.svg';
import Twitter from '../../../public/twitter.svg';
import { Para } from '../../Shared.styles';
import { Wrap, FooterSocials } from './Footer.styles';

type FooterProps = {
	text: any;
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
		<FooterSocials socials={socials} />
	</Wrap>
);

export default Footer;
