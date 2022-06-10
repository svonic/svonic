import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ProgressBarData: ComponentDataAPI = {
	description: {
		en: `Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. There are two types of progress bars: determinate and indeterminate.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/progress-bar',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/progress-bar'
	},
	keyboardNavigationList: [],
	label: 'Progress Bar',
	methodList: [],
	name: 'progress-bar',
	propList: [
		{
			defaultValue: '1',
			description: {
				en: `If the buffer and value are smaller than 1, the buffer circles will show.
			The buffer should be between [0, 1].`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'buffer',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{ ...color, hasDemo: true },
		{ ...mode },
		{
			defaultValue: 'false',
			description: { en: `If true, reverse the progress bar direction.` },
			hasDemo: true,
			isSpecial: false,
			name: 'reversed',
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
			defaultValue: 'determinate',
			description: {
				en: `The state of the progress bar, based on if the time the process takes is known or not.
			Default options are: "determinate" (no animation), "indeterminate" (animate from left to right).`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'type',
			valueList: [
				{
					type: 'string',
					value: 'determinate'
				},
				{
					type: 'string',
					value: 'indeterminate'
				}
			]
		},
		{
			defaultValue: '0',
			description: {
				en: `The value determines how much of the active bar should display when the type is "determinate".
			The value should be between [0, 1].`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'value',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		}
	],
	slotList: []
};
