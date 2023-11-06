import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemOptionsData: ComponentDataAPI = {
	description: {
		en: `The Item Options is a container for the buttons of an Item Sliding component. These buttons can be placed either on the start or end side. You can combine the ionSwipe event plus the expandable directive to create a full swipe action for the item.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the item has been fully swiped.` },
			name: 'ionSwipe'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/item-options',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/item-options'
	},
	keyboardNavigationList: [],
	label: 'Item Options',
	methodList: [],
	name: 'item-options',
	propList: [
		{
			defaultValue: 'end',
			description: {
				en: `The side the option button should be on. Possible values: "start" and "end". If you have multiple Item Options, a side must be provided for each.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'side',
			valueList: [
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'start'
				}
			]
		}
	],
	slotList: []
};
