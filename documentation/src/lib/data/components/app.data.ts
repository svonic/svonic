import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const AppData: ComponentDataAPI = {
	description: {
		en: `App is a container component for an application. There should only be one App component per project. An App can have many components including menus, headers, content, and footers. The overlay components get appended to the App component when they are presented.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/app',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/app'
	},
	keyboardNavigationList: [],
	label: 'App',
	methodList: [],
	name: 'app',
	propList: [],
	slotList: []
};
