import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const RefresherContentData: ComponentDataAPI = {
	description: {
		en: `The refresher content contains the text, icon and spinner to display during a pull-to-refresh. Ionic provides the pulling icon and refreshing spinner based on the platform. However, the default icon, spinner, and text can be customized based on the state of the refresher.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/refresher-content',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/refresher-content'
	},
	keyboardNavigationList: [],
	label: 'Refresher Content',
	methodList: [],
	name: 'refresher-content',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `A static icon or a spinner to display when you begin to pull down.
			A spinner name can be provided to gradually show tick marks when pulling down on iOS devices.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'pullingIcon',
			valueList: [
				{
					type: 'null',
					value: 'null'
				},
				{
					type: 'string',
					value: 'string'
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
				en: `The text you want to display when you begin to pull down.
			pullingText can accept either plaintext or HTML as a string.
			To display characters normally reserved for HTML, they
			must be escaped. For example <Ionic> would become
			&lt;Ionic&gt;`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'pullingText',
			valueList: [
				{
					type: 'IonicSafeString',
					value: 'IonicSafeString'
				},
				{
					type: 'string',
					value: 'string'
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
			hasDemo: false,
			isSpecial: false,
			name: 'refreshingSpinner',
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
					type: 'null',
					value: 'null'
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
				en: `The text you want to display when performing a refresh.
			refreshingText can accept either plaintext or HTML as a string.
			To display characters normally reserved for HTML, they
			must be escaped. For example <Ionic> would become
			&lt;Ionic&gt;`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'refreshingText',
			valueList: [
				{
					type: 'IonicSafeString',
					value: 'IonicSafeString'
				},
				{
					type: 'string',
					value: 'string'
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
