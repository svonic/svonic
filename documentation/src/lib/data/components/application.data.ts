import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ApplicationData: ComponentDataAPI = {
	description: {
		en: `Application is a container component for an application. There should only be one Application component per project. An Application can have many components including menus, headers, content, and footers. The overlay components get appended to the Application component when they are presented.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/app',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/app'
	},
	keyboardNavigationList: [],
	label: 'Application',
	methodList: [],
	name: 'application',
	propList: [],
	slotList: []
};
