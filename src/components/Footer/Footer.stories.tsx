import React from 'react';
import type { Story } from '@storybook/react';
import Footer from '.';

export default {
	title: 'Components / Footer',
	component: Footer,
};

export const Default: Story = (args) => <Footer text={args.text} />;

Default.args = {
	text: (
		<>
			Give me a shout!
			<br />
			<br />
			Get in touch at niamhmccooey@gmail.com or reach out on social media.
			<br />
			<br />
		</>
	),
};

Default.argTypes = {
	text: { table: { disable: true } },
};
