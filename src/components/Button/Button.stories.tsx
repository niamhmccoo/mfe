import Button from '.';
import type { ButtonProps } from '.';
import React from 'react';
import type { Story } from '@storybook/react';

export default {
	title: 'Components / Button',
};

export const Default: Story<ButtonProps> = (args) => (
	<Button
		label={args.label}
		dark={args.dark}
		disabled={args.disabled}
		size={args.size}
		kind={args.kind}
	/>
);

Default.args = {
	label: 'Modern Frontends',
	dark: false,
	disabled: false,
	size: 'small',
	kind: 'primary',
};

Default.argTypes = {
	label: { control: 'text' },
	dark: { control: 'boolean' },
	disabled: { control: 'boolean' },
	size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
	kind: { control: { type: 'select', options: ['primary', 'secondary', 'danger'] } },
};

export const DarkMode: Story<ButtonProps> = (args) => (
	<Default
		label={args.label}
		dark={args.dark}
		disabled={args.disabled}
		size={args.size}
		kind={args.kind}
	/>
);

DarkMode.args = { ...Default.args, dark: true };
DarkMode.argTypes = { ...Default.argTypes };
