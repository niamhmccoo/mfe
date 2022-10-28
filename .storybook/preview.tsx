import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/themes.styles';
import GlobalStyles from '../src/globalStyles';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withTheme: DecoratorFn = (StoryFn, context) => {
	const theme = context.parameters.theme || context.globals.theme;
	const storyTheme = theme === 'dark' ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={storyTheme}>
			<GlobalStyles />
			<StoryFn />
		</ThemeProvider>
	);
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			// The icon for the toolbar item
			icon: 'circlehollow',
			// Array of options
			items: [
				{ value: 'light', icon: 'circlehollow', title: 'light' },
				{ value: 'dark', icon: 'circle', title: 'dark' },
			],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

export const decorators = [withTheme];
