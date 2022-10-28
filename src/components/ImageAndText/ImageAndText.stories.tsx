import React from 'react';
import type { Story } from '@storybook/react';
import ImageAndText from '.';

export default {
	title: 'Components / Image And Text',
	component: ImageAndText,
};

export const Default: Story = (args) => <ImageAndText text={args.text} reverse={args.reverse} />;

Default.args = {
	text: (
		<>
			👋 Hi! I'm Niamh (like 'neev').
			<br />
			<br />I like to build websites and web apps using React. <br />I also like to speak at tech
			conferences, and going to meet ups.
		</>
	),
	reverse: false,
};

Default.argTypes = {
	text: { table: { disable: true } },
	reverse: { control: 'boolean' },
};
