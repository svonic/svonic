import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ChipData: ComponentDataAPI = {
	description: {
		en: `Chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, and icons.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/chip',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/chip'
	},
	keyboardNavigationList: [],
	label: 'Chip',
	methodList: [],
	name: 'chip',
	propList: [
		{ ...color, hasDemo: true },
		{ ...disabled, hasDemo: true },
		{ ...mode },
		{
			defaultValue: 'false',
			description: { en: `Display an outline style button.` },
			hasDemo: true,
			isSpecial: false,
			name: 'outline',
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
		{ ...slot }
	],
	slotList: []
};
