import { click } from '$lib/data/events/click.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { type } from '$lib/data/props/type-button.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const MenuButtonData: ComponentDataAPI = {
	description: {
		en: `Menu Button is component that automatically creates the icon and functionality to open a Menu on a page.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/menu-button',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/menu-button'
	},
	keyboardNavigationList: [],
	label: 'Menu Button',
	methodList: [],
	name: 'menu-button',
	propList: [
		{
			defaultValue: 'true',
			description: {
				en: `Automatically hides the Menu Button when the corresponding Menu is not active.`
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
				en: `Optional property that maps to a Menu's Id prop. Can also be start or end for the Menu side. This is used to find the correct Menu to button.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'menuId',
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
