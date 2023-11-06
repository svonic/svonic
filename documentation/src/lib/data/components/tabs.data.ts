import { defaultSlot } from '$lib/data/slots/default.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const TabsData: ComponentDataAPI = {
	description: {
		en: `The Tabs is a top level navigation component to implement a tab-based navigation. The component is a container of individual Tab components.

	Both Tabs and TabBar can be used as standalone elements. They don't depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/tabs',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/tabs'
	},
	keyboardNavigationList: [],
	label: 'Tabs',
	methodList: [
		{
			description: { en: `Get the currently selected tab.` },
			name: 'getSelected',
			signature: `getSelected() => Promise<string | undefined>`
		},
		{
			description: {
				en: `Get a specific tab by the value of its tab property or an element reference.`
			},
			name: 'getTab',
			signature: `getTab(tab: string | HTMLIonTabElement) => Promise<HTMLIonTabElement | undefined>`
		},
		{
			description: { en: `Select a tab by the value of its tab property or an element reference.` },
			name: 'select',
			signature: `select(tab: string | HTMLIonTabElement) => Promise<boolean>`
		}
	],
	name: 'tabs',
	propList: [],
	slotList: [
		{ ...defaultSlot },
		{
			description: { en: `Content is placed at the bottom of the screen.` },
			name: 'bottom'
		},
		{
			description: { en: `Content is placed at the top of the screen.` },
			name: 'top'
		}
	]
};
