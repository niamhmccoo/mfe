import React from 'react';
import type { Story } from '@storybook/react';
import Footer from '.';

export default { title: 'Components / Footer', component: Footer };

export const Default: Story = (args) => <Footer text={args.text} />;

Default.args = {
	text: 'This is the footer! Blah di blah blah',
};
