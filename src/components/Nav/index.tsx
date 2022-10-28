import React from 'react';
import { Wrap, Border, HomeTab, NavTabs, Tab } from './Nav.styles';

const tabs = [{ text: '🎤 speaking' }, { text: '📖 writing' }, { text: '✨ learn to code' }];

const Nav = () => (
	<Wrap>
		<Border>
			<HomeTab>👋 niamh (like 'neev')</HomeTab>
			<NavTabs>
				{tabs.map((t) => (
					<Tab>{t.text}</Tab>
				))}
			</NavTabs>
		</Border>
	</Wrap>
);

export default Nav;
