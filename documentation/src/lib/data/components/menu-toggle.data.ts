import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const MenuToggleData: ComponentDataAPI = {
	description: {
		en: `The Menu Toggle component can be used to toggle a Menu open or closed.

	By default, it's only visible when the selected Menu is active. A Menu is active when it can be opened/closed. If the Menu is disabled or it's being presented as a NavigationPane, the Menu is marked as non-active and MenuToggle hides itself.

	In case it's desired to keep MenuToggle always visible, the autoHide property can be set to false.

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
	label: 'Menu Toggle',
	methodList: [],
	name: 'menu-toggle',
	propList: [
		{
			defaultValue: 'true',
			description: {
				en: `Automatically hides the content when the corresponding Menu is not active.

			By default, it's true. Change it to false in order to keep MenuToggle always visible regardless the state of the Menu.`
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
				en: `Optional property that maps to a Menu's Id prop. Can also be start or end for the Menu side. This is used to find the correct Menu to toggle.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'menuId',
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
