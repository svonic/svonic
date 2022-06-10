import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ListHeaderData: ComponentDataAPI = {
	description: {
		en: `ListHeader a header component for a list. Unlike ItemDivider, ListHeaders are styled to be stand-out from the rest of the list items.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/list-header',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/list-header'
	},
	keyboardNavigationList: [],
	label: 'List Header',
	methodList: [],
	name: 'list-header',
	propList: [
		{ ...color },
		{
			defaultValue: 'undefined',
			description: { en: `How the bottom border should be displayed on the list header.` },
			hasDemo: false,
			isSpecial: false,
			name: 'lines',
			valueList: [
				{
					type: 'string',
					value: 'full'
				},
				{
					type: 'string',
					value: 'inset'
				},
				{
					type: 'string',
					value: 'none'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...mode }
	],
	slotList: []
};
