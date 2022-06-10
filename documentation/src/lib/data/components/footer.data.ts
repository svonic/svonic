import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const FooterData: ComponentDataAPI = {
	description: {
		en: `Footer is a root component of a page that sits at the bottom of the page. Footer can be a wrapper for a Toolbar to make sure the content area is sized correctly.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/footer',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/footer'
	},
	keyboardNavigationList: [],
	label: 'Footer',
	methodList: [],
	name: 'footer',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `Describes the scroll effect that will be applied to the footer. Only applies in iOS mode.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'collapse',
			valueList: [
				{
					type: 'string',
					value: 'fade'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...translucent }
	],
	slotList: []
};
