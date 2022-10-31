import Button from '.';
import type { ButtonProps } from '.';
import React from 'react';
import type { Story } from '@storybook/react';

export default {
	title: 'Components / Button',
	component: Button,
};

export const Primary: Story<ButtonProps> = (args) => (
	<Button label={args.label} disabled={args.disabled} size={args.size} kind='primary' />
);

Primary.args = {
	label: 'Subscribe',
	disabled: false,
	size: 'small',
};

Primary.argTypes = {
	label: { control: 'text' },
	disabled: { control: 'boolean' },
	size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
	kind: { table: { disable: true } },
};

export const Secondary: Story<ButtonProps> = (args) => (
	<Button label={args.label} disabled={args.disabled} size={args.size} kind='secondary' />
);

Secondary.args = {
	label: 'Submit',
	disabled: false,
	size: 'medium',
};

Secondary.argTypes = {
	label: { control: 'text' },
	disabled: { control: 'boolean' },
	size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
	kind: { table: { disable: true } },
};

export const Danger: Story<ButtonProps> = (args) => (
	<Button label={args.label} disabled={args.disabled} size={args.size} kind='danger' />
);

Danger.args = {
	label: 'Warning!',
	disabled: false,
	size: 'large',
};

Danger.argTypes = {
	label: { control: 'text' },
	disabled: { control: 'boolean' },
	size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
	kind: { table: { disable: true } },
};
