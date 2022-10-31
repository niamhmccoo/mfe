import Socials from '.';
import React from 'react';
import type { Story } from '@storybook/react';
import LinkedIn from '../../../public/linkedin.svg';
import Twitter from '../../../public/twitter.svg';

export default {
	title: 'Components / Socials',
	component: Socials,
};

export const Default: Story = (args) => <Socials socials={args.socials} />;

Default.args = {
	socials: [
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
	],
};

Default.argTypes = {
	socials: { table: { disable: true } },
};
