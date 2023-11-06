import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const FabListData: ComponentDataAPI = {
	description: {
		en: `The Fab List element is a container for multiple fab buttons. This collection of fab buttons contains actions related to the main fab button and is flung out on click. To specify what side the buttons should appear on, set the side property to 'start', 'end', 'top', 'bottom`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/fab-list',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/fab-list'
	},
	keyboardNavigationList: [],
	label: 'Fab List',
	methodList: [],
	name: 'fab-list',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the fab list will show all fab buttons in the list.` },
			hasDemo: false,
			isSpecial: false,
			name: 'activated',
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
			defaultValue: 'bottom',
			description: {
				en: `The side the Fab List will show on relative to the main fab button.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'side',
			valueList: [
				{
					type: 'string',
					value: 'bottom'
				},
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'start'
				},
				{
					type: 'string',
					value: 'top'
				}
			]
		}
	],
	slotList: []
};
