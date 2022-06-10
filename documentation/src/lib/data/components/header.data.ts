import { mode } from '$lib/data/props/mode.data';
import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const HeaderData: ComponentDataAPI = {
	description: {
		en: `Header is a parent component that holds the toolbar component. It's important to note that ion-header needs to be the one of the three root elements of a page.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/header',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/header'
	},
	keyboardNavigationList: [],
	label: 'Header',
	methodList: [],
	name: 'header',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `Describes the scroll effect that will be applied to the header. Only applies in iOS mode.

			Typically used for Collapsible Large Titles.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'collapse',
			valueList: [
				{
					type: 'string',
					value: 'condense'
				},
				{
					type: 'string',
					value: 'fade'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...mode },
		{ ...translucent }
	],
	slotList: []
};
