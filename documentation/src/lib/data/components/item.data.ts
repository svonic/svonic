import { click } from '$lib/data/events/click.data';
import { button } from '$lib/data/props/button.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { download } from '$lib/data/props/download.data';
import { href } from '$lib/data/props/href.data';
import { mode } from '$lib/data/props/mode.data';
import { rel } from '$lib/data/props/rel.data';
import { routerDirection } from '$lib/data/props/router-direction.data';
import { target } from '$lib/data/props/target.data';
import { type } from '$lib/data/props/type-button.data';
import { defaultSlot } from '$lib/data/slots/default.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemData: ComponentDataAPI = {
	description: {
		en: `Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Generally they are placed in a list with other items. Items can be swiped, deleted, reordered, edited, and more.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/item',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/item'
	},
	keyboardNavigationList: [],
	label: 'Item',
	methodList: [],
	name: 'item',
	propList: [
		{ ...button },
		{ ...color },
		{
			defaultValue: 'false',
			description: {
				en: `If true, a character counter will display the ratio of characters used and the total character limit. Only applies when the maxlength property is set on the inner Input or Textarea.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'counter',
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
			description: {
				en: `If true, a detail arrow will appear on the item. Defaults to false unless the mode is ios and an href or button property is present.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'detail',
			valueList: [
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'chevronForward',
			description: { en: `The icon to use when detail is set to true.` },
			hasDemo: false,
			isSpecial: false,
			name: 'detailIcon',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{ ...disabled },
		{ ...download },
		{
			defaultValue: 'undefined',
			description: {
				en: `The fill for the item. If 'solid' the item will have a background. If 'outline' the item will be transparent with a border. Only available in md mode.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'fill',
			valueList: [
				{
					type: 'string',
					value: 'outline'
				},
				{
					type: 'string',
					value: 'solid'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...href },
		{
			defaultValue: 'undefined',
			description: { en: `How the bottom border should be displayed on the item.` },
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
		{ ...rel },
		{ ...routerDirection },
		{
			defaultValue: 'undefined',
			description: {
				en: `The shape of the item. If "round" it will have increased border radius.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'shape',
			valueList: [
				{
					type: 'string',
					value: 'round'
				},
				{
					value: 'undefined',
					type: 'undefined'
				}
			]
		},
		{ ...target },
		{ ...type }
	],
	slotList: [
		{ ...defaultSlot },
		{ ...end },
		{
			description: {
				en: `Content is placed under the item and displayed when an error is detected.`
			},
			name: 'error'
		},
		{
			description: {
				en: `Content is placed under the item and displayed when no error is detected.`
			},
			name: 'helper'
		},
		{ ...start }
	]
};
