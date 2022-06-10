import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { toSlot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const LabelData: ComponentDataAPI = {
	description: {
		en: `Label is a wrapper element that can be used in combination with Item, Input, Toggle, and more. The position of the label inside of an Item can be inline, fixed, stacked, or floating.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/label',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/label'
	},
	keyboardNavigationList: [],
	label: 'Label',
	methodList: [],
	name: 'label',
	propList: [
		{ ...color },
		{ ...mode },
		{
			defaultValue: 'position',
			description: {
				en: `The position determines where and how the label behaves inside an Item component.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'position',
			valueList: [
				{
					type: 'string',
					value: 'fixed'
				},
				{
					type: 'string',
					value: 'floating'
				},
				{
					type: 'string',
					value: 'stacked'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...toSlot }
	],
	slotList: []
};
