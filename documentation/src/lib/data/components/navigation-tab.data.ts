import { tabId } from '$lib/data/props/tab-id.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const NavigationTabData: ComponentDataAPI = {
	description: { en: `The tab component is a child component of NavigationTabGroup.` },
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/tab',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/tab'
	},
	keyboardNavigationList: [],
	label: 'Navigation Tab',
	methodList: [
		{
			description: { en: `Set the active component for the tab.` },
			name: 'setActive',
			signature: `setActive() => Promise<void>`
		}
	],
	name: 'navigation-tab',
	propList: [{ ...tabId }],
	slotList: []
};
