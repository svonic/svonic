import { disabled } from '$lib/data/props/disabled.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const NavigationPaneData: ComponentDataAPI = {
	description: {
		en: `A NavigationPane is useful when creating multi-view layouts. It allows UI elements, like menus, to be displayed as the viewport width increases.

	If the device's screen width is below a certain size, the NavigationPane will collapse and the menu will be hidden. This is ideal for creating an app that will be served in a browser and deployed through the app store to phones and tablets.`
	},
	dispatchedEventList: [
		{
			description: {
				en: `Expression to be called when the NavigationPane visibility has changed.`
			},
			name: 'svo:navigation-pane-visible'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/split-pane',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/split-pane'
	},
	keyboardNavigationList: [],
	label: 'Navigation Pane',
	methodList: [],
	name: 'navigation-pane',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `The id of the main content. This is typically your main view's Content component. This is not the id of the Content inside of your Drawer component.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'contentId',
			valueList: [
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
		{ ...disabled },
		{
			defaultValue: 'lg',
			description: {
				en: `When the split-pane should be shown.
			Can be a CSS media query expression, or a shortcut expression.
			Can also be a boolean expression.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'when',
			valueList: [
				{
					type: 'string',
					value: 'lg'
				},
				{
					type: 'string',
					value: 'md'
				},
				{
					type: 'string',
					value: 'sm'
				},
				{
					type: 'string',
					value: 'xl'
				},
				{
					type: 'string',
					value: 'xs'
				},
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				},
				{
					type: 'string',
					value: 'string'
				}
			]
		}
	],
	slotList: []
};
