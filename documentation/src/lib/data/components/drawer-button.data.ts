import { click } from '$lib/data/events/click.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { type } from '$lib/data/props/type-button.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const DrawerButtonData: ComponentDataAPI = {
	description: {
		en: `Drawer Button is component that automatically creates the icon and functionality to open a Drawer on a page.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/menu-button',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/menu-button'
	},
	keyboardNavigationList: [],
	label: 'Drawer Button',
	methodList: [],
	name: 'drawer-button',
	propList: [
		{
			defaultValue: 'true',
			description: {
				en: `Automatically hides the Drawer Button when the corresponding Drawer is not active.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'autoHide',
			valueList: [
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				}
			]
		},
		{ ...color },
		{ ...disabled },
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: {
				en: `Optional property that maps to a Drawer's Id prop. Can also be start or end for the Drawer side. This is used to find the correct Drawer to button.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'DrawerId',
			valueList: [
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'start'
				},
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
		{ ...type, defaultValue: 'button' }
	],
	slotList: []
};
