import { color } from '$lib/data/props/color.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const TitleData: ComponentDataAPI = {
	description: { en: `Title is a component that sets the title of the Toolbar` },
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/title',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/title'
	},
	keyboardNavigationList: [],
	label: 'Title',
	methodList: [],
	name: 'title',
	propList: [
		{ ...color, hasDemo: true },
		{
			defaultValue: 'undefined',
			description: { en: `The size of the toolbar title.` },
			hasDemo: true,
			isSpecial: false,
			name: 'size',
			valueList: [
				{
					type: 'string',
					value: 'large'
				},
				{
					type: 'string',
					value: 'small'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		}
	],
	slotList: []
};
