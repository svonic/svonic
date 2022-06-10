import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const NavigationTabBarData: ComponentDataAPI = {
	description: {
		en: `The NavigationTabBar is a UI component that contains a set of tab buttons. A NavigationTabBar must be provided inside of NavigationTabGroup to communicate with each tab.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/tab-bar',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/tab-bar'
	},
	keyboardNavigationList: [],
	label: 'Navigation Tab Bar',
	methodList: [],
	name: 'navigation-tab-bar',
	propList: [
		{ ...color },
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: { en: `The selected tab component.` },
			hasDemo: false,
			isSpecial: false,
			name: 'selectedTab',
			valueList: [
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `Slot work around.` },
			hasDemo: false,
			isSpecial: true,
			name: 'toSlot',
			valueList: [
				{
					type: 'string',
					value: 'bottom'
				},
				{
					type: 'string',
					value: 'top'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...translucent }
	],
	slotList: []
};
