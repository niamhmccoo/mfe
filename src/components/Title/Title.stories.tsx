import Title from '.';
import React from 'react';
import type { Story } from '@storybook/react';

export default {
	title: 'Components / Title',
};

export const Default: Story = (args) => <Title text={args.text} background={args.background} />;

Default.args = {
	text: "🚀 A Beginner's Guide To Storybook! ",
	background: '',
};

Default.argTypes = {
	text: { control: 'text' },
};
