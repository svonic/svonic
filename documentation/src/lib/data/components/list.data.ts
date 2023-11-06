import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ListData: ComponentDataAPI = {
	description: {
		en: `Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

	Lists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/list',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/list'
	},
	keyboardNavigationList: [],
	label: 'List',
	methodList: [
		{
			description: {
				en: `If Item Sliding components are used inside the List, this method closes
			any open sliding item.

			Returns true if an actual Item Sliding is closed.`
			},
			name: 'closeSlidingItems',
			signature: `closeSlidingItems() => Promise<boolean>`
		}
	],
	name: 'list',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the list will have margin around it and rounded corners.` },
			hasDemo: false,
			isSpecial: false,
			name: 'inset',
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
		{
			defaultValue: 'undefined',
			description: { en: `How the bottom border should be displayed on all items.` },
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
		{ ...mode },
		{ ...slot }
	],
	slotList: []
};
