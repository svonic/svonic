import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemReorderData: ComponentDataAPI = {
	description: {
		en: `Reorder is a component that allows an item in a group of items to be dragged to change its order within that group. It must be used within an Reorder Group to provide a visual drag and drop interface.

	Reorder is the anchor used to drag and drop the items inside of the Reorder Group. See the Reorder Group for more information on how to complete the reorder operation.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/reorder',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/reorder'
	},
	keyboardNavigationList: [],
	label: 'Item Reorder',
	methodList: [],
	name: 'item-reorder',
	propList: [
		{
			defaultValue: 'undefined',
			description: { en: `Slot work around.` },
			hasDemo: false,
			isSpecial: true,
			name: 'slot',
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
					type: 'undefined',
					value: 'undefined'
				}
			]
		}
	],
	slotList: []
};
