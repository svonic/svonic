import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const DrawerToggleData: ComponentDataAPI = {
	description: {
		en: `The DrawerToggle component can be used to toggle a Drawer open or closed.

	By default, it's only visible when the selected Drawer is active. A Drawer is active when it can be opened/closed. If the Drawer is disabled or it's being presented as a NavigationPane, the Drawer is marked as non-active and DrawerToggle hides itself.

	In case it's desired to keep DrawerToggle always visible, the autoHide property can be set to false.

	`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/menu-toggle',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/menu-toggle'
	},
	keyboardNavigationList: [],
	label: 'Drawer Toggle',
	methodList: [],
	name: 'drawer-toggle',
	propList: [
		{
			defaultValue: 'true',
			description: {
				en: `Automatically hides the content when the corresponding Drawer is not active.

			By default, it's true. Change it to false in order to keep DrawerToggle always visible regardless the state of the Drawer.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'autoHide',
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
		{
			defaultValue: 'undefined',
			description: {
				en: `Optional property that maps to a Drawer's Id prop. Can also be start or end for the Drawer side. This is used to find the correct Drawer to toggle.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'DrawerId',
			valueList: [
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'start'
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
