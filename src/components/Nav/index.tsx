import React from 'react';
import { Wrap, HomeTab, NavTabs, Tab } from './Nav.styles';

const tabs = [{ text: 'speaking' }, { text: 'writing' }, { text: 'learn to code!' }];

const Nav = () => (
	<Wrap>
		<HomeTab>Niamh (like 'neev')</HomeTab>
		<NavTabs>
			{tabs.map((t) => (
				<Tab>{t.text}</Tab>
			))}
		</NavTabs>
	</Wrap>
);

export default Nav;
