import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const BreadcrumbGroupData: ComponentDataAPI = {
	description: {
		en: `The Breadcrumb Group is a container for navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. The Breadcrumb Group can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed the Breadcrumb Group.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the collapsed indicator is clicked on.` },
			name: 'svo:collapsed-click'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/breadcrumbs',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/breadcrumbs'
	},
	keyboardNavigationList: [],
	label: 'Breadcrumb Group',
	methodList: [],
	name: 'breadcrumb-group',
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
