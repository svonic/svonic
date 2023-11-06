import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const TabBarData: ComponentDataAPI = {
	description: {
		en: `The TabBar is a UI component that contains a set of tab buttons. A TabBar must be provided inside of Tabs to communicate with each tab.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/tab-bar',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/tab-bar'
	},
	keyboardNavigationList: [],
	label: 'Tab Bar',
	methodList: [],
	name: 'tab-bar',
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
			name: 'slot',
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
