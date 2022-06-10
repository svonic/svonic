import { disabled } from '$lib/data/props/disabled.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemSlidingData: ComponentDataAPI = {
	description: {
		en: `A sliding item contains an item that can be dragged to reveal buttons. It requires an item component as a child. All options to reveal should be placed in the Item Option Group component.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the sliding position changes.` },
			name: 'svo:drag'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/item-sliding',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/item-sliding'
	},
	keyboardNavigationList: [],
	label: 'Item Sliding',
	methodList: [
		{
			description: {
				en: `Close the sliding item. Items can also be closed from the List component.`
			},
			name: 'close',
			signature: `close() => Promise<void>`
		},
		{
			description: {
				en: `Close all of the sliding items in the list. Items can also be closed from the List component.`
			},
			name: 'closeOpened',
			signature: `closeOpened() => Promise<boolean>`
		},
		{
			description: { en: `Get the amount the item is open in pixels.` },
			name: 'getOpenAmount',
			signature: `getOpenAmount() => Promise<number>`
		},
		{
			description: {
				en: `Get the ratio of the open amount of the item compared to the width of the options.
			If the number returned is positive, then the options on the right side are open.
			If the number returned is negative, then the options on the left side are open.
			If the absolute value of the number is greater than 1, the item is open more than the width of the options.`
			},
			name: 'getSlidingRatio',
			signature: `getSlidingRatio() => Promise<number>`
		},
		{
			description: { en: `Open the sliding item.` },
			name: 'open',
			signature: `close() => Promise<void>`
		}
	],
	name: 'item-sliding',
	propList: [{ ...disabled }],
	slotList: []
};
