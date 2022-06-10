import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { defaultSlot } from '$lib/data/slots/default.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemDividerData: ComponentDataAPI = {
	description: {
		en: `Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of items.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/item-divider',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/item-divider'
	},
	keyboardNavigationList: [],
	label: 'Item Divider',
	methodList: [],
	name: 'item-divider',
	propList: [
		{ ...color },
		{ ...mode },
		{
			defaultValue: 'false',
			description: {
				en: `When it's set to true, the item-divider will stay visible when it reaches the top
			of the viewport until the next ion-item-divider replaces it.

			This feature relies in position:sticky:
			https://caniuse.com/#feat=css-sticky`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'sticky',
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
		}
	],
	slotList: [{ ...defaultSlot }, { ...end }, { ...start }]
};
