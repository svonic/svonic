import { blur } from '$lib/data/events/blur.data';
import { change } from '$lib/data/events/change.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { debounce } from '$lib/data/props/debounce.data';
import { disabled } from '$lib/data/props/disabled.data';
import { max } from '$lib/data/props/max.data';
import { min } from '$lib/data/props/min.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const RangeSliderData: ComponentDataAPI = {
	description: {
		en: `The Range slider lets users select from a range of values by moving the slider knob. It can accept dual knobs, but by default one knob controls the value of the range.`
	},
	dispatchedEventList: [
		{ ...blur },
		{ ...change },
		{ ...focus },
		{
			description: {
				en: `Emitted when the user finishes moving the range knob, whether through mouse drag, touch gesture, or keyboard interaction.`
			},
			name: 'svo:knbo-move-end'
		},
		{
			description: {
				en: `Emitted when the user starts moving the range knob, whether through mouse drag, touch gesture, or keyboard interaction.`
			},
			name: 'svo:knbo-move-start'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/range',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/range'
	},
	keyboardNavigationList: [],
	label: 'Range Slider',
	methodList: [],
	name: 'range-slider',
	propList: [
		{ ...color, hasDemo: true },
		{ ...debounce },
		{ ...disabled },
		{
			defaultValue: 'false',
			description: { en: `Show two knobs.` },
			hasDemo: true,
			isSpecial: false,
			name: 'dualKnobs',
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
		{ ...max, defaultValue: '100' },
		{ ...min, defaultValue: '0' },
		{ ...mode },
		{ ...name },
		{
			defaultValue: 'false',
			description: { en: `If true, a pin with integer value is shown when the knob is pressed.` },
			hasDemo: true,
			isSpecial: false,
			name: 'pin',
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
			defaultValue: 'false',
			description: {
				en: `If true, the knob snaps to tick marks evenly spaced based on the step property value.`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'snaps',
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
			defaultValue: '1',
			description: { en: `Specifies the value granularity.` },
			hasDemo: true,
			isSpecial: false,
			name: 'step',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{
			defaultValue: 'true',
			description: {
				en: `If true, tick marks are displayed based on the step value.
			Only applies when snaps is true.`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'ticks',
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
			defaultValue: '0',
			description: { en: `The value of the range.` },
			hasDemo: false,
			isSpecial: false,
			name: 'value',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'object',
					value: '{ lower: number; upper: number; }'
				}
			]
		}
	],
	slotList: [{ ...end }, { ...start }]
};
