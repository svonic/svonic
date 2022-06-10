import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { download } from '$lib/data/props/download.data';
import { href } from '$lib/data/props/href.data';
import { mode } from '$lib/data/props/mode.data';
import { rel } from '$lib/data/props/rel.data';
import { target } from '$lib/data/props/target.data';
import { type } from '$lib/data/props/type-button.data';
import { defaultSlot } from '$lib/data/slots/default.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemOptionData: ComponentDataAPI = {
	description: {
		en: `The option button for an ion-item-sliding. Must be placed inside of an <ion-item-options>. You can combine the ionSwipe event and the expandable directive to create a full swipe action for the item.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/item-option',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/item-option'
	},
	keyboardNavigationList: [],
	label: 'Item Option',
	methodList: [],
	name: 'item-option',
	propList: [
		{ ...color },
		{ ...disabled },
		{ ...download },
		{
			defaultValue: 'false',
			description: {
				en: `If true, the option will expand to take up the available width and cover any other options.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'expandable',
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
		{ ...href },
		{ ...mode },
		{ ...rel },
		{ ...target },
		{ ...type }
	],
	slotList: [
		{ ...defaultSlot },
		{
			description: { en: `Content is placed below the option text.` },
			name: 'bottom'
		},
		{ ...end },
		{
			description: { en: `Should be used on an icon in an option that has no text.` },
			name: 'icon-only'
		},
		{ ...start },
		{
			description: { en: `Content is placed above the option text.` },
			name: 'top'
		}
	]
};
