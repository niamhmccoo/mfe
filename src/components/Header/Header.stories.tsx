import Header from '.';
import React from 'react';
import type { Story } from '@storybook/react';

export default {
	title: 'Components / Header',
	component: Header,
};

export const Default: Story = (args) => <Header title={args.title} />;

Default.args = {
	title: "🚀 A Beginner's Guide To Storybook! ",
};

Default.argTypes = {
	title: { control: 'text' },
};
