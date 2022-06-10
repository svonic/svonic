import { color } from '$lib/data/props/color.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ProgressSpinnerData: ComponentDataAPI = {
	description: {
		en: `The Progress Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.

	The default spinner to use is based on the platform. The default spinner for ios is "lines", and the default for android is "crescent". If the platform is not ios or android, the spinner will default to crescent. If the name property is set, then that spinner will be used instead of the platform specific spinner.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/progress-spinner',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/progress-spinner'
	},
	keyboardNavigationList: [],
	label: 'Progress Spinner',
	methodList: [],
	name: 'progress-spinner',
	propList: [
		{ ...color, hasDemo: true },
		{
			defaultValue: 'undefined',
			description: {
				en: `Duration of the spinner animation in milliseconds. The default varies based on the spinner.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'duration',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `The name of the SVG spinner to use. If a name is not provided, the platform's default spinner will be used.`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'name',
			valueList: [
				{
					type: 'string',
					value: 'bubbles'
				},
				{
					type: 'string',
					value: 'circles'
				},
				{
					type: 'string',
					value: 'circular'
				},
				{
					type: 'string',
					value: 'crescent'
				},
				{
					type: 'string',
					value: 'dots'
				},
				{
					type: 'string',
					value: 'lines'
				},
				{
					type: 'string',
					value: 'lines-sharp'
				},
				{
					type: 'string',
					value: 'lines-sharp-small'
				},
				{
					type: 'string',
					value: 'lines-small'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'false',
			description: { en: `If true, the spinner's animation will be paused.` },
			hasDemo: false,
			isSpecial: false,
			name: 'paused',
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
		}
	],
	slotList: []
};
