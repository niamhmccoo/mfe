import Title from '.';
import React from 'react';
import type { Story } from '@storybook/react';

export default {
	title: 'Components / Title',
	component: Title,
};

export const Default: Story = (args) => <Title text={args.text} />;

Default.args = {
	text: "🚀 A Beginner's Guide To Storybook! ",
};

Default.argTypes = {
	text: { control: 'text' },
};
