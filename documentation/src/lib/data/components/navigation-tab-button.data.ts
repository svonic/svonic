import { click } from '$lib/data/events/click.data';
import { disabled } from '$lib/data/props/disabled.data';
import { download } from '$lib/data/props/download.data';
import { href } from '$lib/data/props/href.data';
import { mode } from '$lib/data/props/mode.data';
import { rel } from '$lib/data/props/rel.data';
import { tabId } from '$lib/data/props/tab-id.data';
import { target } from '$lib/data/props/target.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const NavigationTabButtonData: ComponentDataAPI = {
	description: {
		en: `A tab button is a UI component that is placed inside of a tab bar. The tab button can specify the layout of the icon and label.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/tab-button',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/tab-button'
	},
	keyboardNavigationList: [],
	label: 'Navigation Tab Button',
	methodList: [],
	name: 'navigation-tab-button',
	propList: [
		{ ...disabled },
		{ ...download },
		{ ...href },
		{
			defaultValue: 'icon-top',
			description: {
				en: `Set the layout of the text and icon in the tab bar. It defaults to 'icon-top'.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'layout',
			valueList: [
				{
					type: 'string',
					value: 'icon-bottom'
				},
				{
					type: 'string',
					value: 'icon-end'
				},
				{
					type: 'string',
					value: 'icon-hide'
				},
				{
					type: 'string',
					value: 'icon-start'
				},
				{
					type: 'string',
					value: 'icon-top'
				},
				{
					type: 'string',
					value: 'label-hide'
				}
			]
		},
		{ ...mode },
		{ ...rel },
		{
			defaultValue: 'false',
			description: { en: `The selected tab component.` },
			hasDemo: false,
			isSpecial: false,
			name: 'selected',
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
		{ ...tabId },
		{ ...target }
	],
	slotList: []
};
