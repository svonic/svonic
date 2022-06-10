import { click } from '$lib/data/events/click.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { type } from '$lib/data/props/type-button.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const SegmentButtonData: ComponentDataAPI = {
	description: {
		en: `Segment buttons are groups of related buttons inside of a Segment. They are displayed in a horizontal row. A segment button can be checked by default by setting the value of the segment to the value of the segment button. Only one segment button can be selected at a time.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/segment-button',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/segment-button'
	},
	keyboardNavigationList: [],
	label: 'Segment Button',
	methodList: [],
	name: 'segment-button',
	propList: [
		{ ...disabled },
		{
			defaultValue: 'icon-top',
			description: { en: `Set the layout of the text and icon in the segment.` },
			hasDemo: false,
			isSpecial: false,
			name: 'layout',
			valueList: [
				{
					type: 'string',
					value: 'icon-bottom'
				},
				{
					type: 'string',
					value: 'icon-end'
				},
				{
					type: 'string',
					value: 'icon-hide'
				},
				{
					type: 'string',
					value: 'icon-start'
				},
				{
					type: 'string',
					value: 'icon-top'
				},
				{
					type: 'string',
					value: 'label-hide'
				}
			]
		},
		{ ...mode },
		{ ...type },
		{ ...value }
	],
	slotList: []
};
