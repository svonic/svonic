import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const BreadcrumbsData: ComponentDataAPI = {
	description: {
		en: `The Breadcrumbs is a container for navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. The Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed the Breadcrumbs.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the collapsed indicator is clicked on.` },
			name: 'ionCollapsedClick'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/breadcrumbs',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/breadcrumbs'
	},
	keyboardNavigationList: [],
	label: 'Breadcrumbs',
	methodList: [],
	name: 'breadcrumbs',
	propList: [
		{ ...color },
		{
			defaultValue: '1',
			description: {
				en: `The number of breadcrumbs to show after the collapsed indicator.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'itemsAfterCollapse',
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
			defaultValue: '1',
			description: {
				en: `The number of breadcrumbs to show before the collapsed indicator.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'itemsBeforeCollapse',
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
				en: `The number of breadcrumbs to show before the collapsed indicator.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'maxItems',
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
		{ ...mode }
	],
	slotList: []
};
