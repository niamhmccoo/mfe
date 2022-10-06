import React from 'react';
import type { Story } from '@storybook/react';
import ImageAndText from '.';

export default {
	title: 'Components / Image And Text',
	component: ImageAndText,
};

export const Default: Story = (args) => <ImageAndText text={args.text} />;

Default.args = {
	text: 'Here is the bio! These are things I like to do, bla di bla bla bla.',
};
