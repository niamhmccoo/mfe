import { DefaultTheme } from 'styled-components';

export const colors = {
	white: '#ffffff',
	black: '#161314',
	grey: '#A7A7A7',
	lightHover: '#F7F7F7',
	darkHover: '#232222',
};

export const darkTheme = {
	...colors,
	remFontSize: '16px',
	fg: colors.white,
	bg: colors.black,
};

export const lightTheme = (theme: DefaultTheme): DefaultTheme => ({
	...theme,
	fg: colors.black,
	bg: colors.white,
	bgHover: colors.lightHover,
	dropShadow: '0 0 2rem 0 rgba(0, 0, 0, 0.12)',
	revealTransition: '500ms ease-in-out',
});
