import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ButtonGroupData: ComponentDataAPI = {
	description: {
		en: `The ButtonGroup component is a container component. Buttons placed in a toolbar should be placed inside of the ButtonGroup component.

	The ButtonGroup component can be positioned inside of the toolbar using a named slot.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/buttons',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/buttons'
	},
	keyboardNavigationList: [],
	label: 'Button Group',
	methodList: [],
	name: 'button-group',
	propList: [
		{
			defaultValue: 'false',
			description: {
				en: `If true, buttons will disappear when its parent toolbar has fully collapsed if the toolbar is not the first toolbar. If the toolbar is the first toolbar, the buttons will be hidden and will only be shown once all toolbars have fully collapsed.

			Only applies in ios mode with collapse set to true on the Header component.

			Typically used for Collapsible Large Titles.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'collapse',
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
			description: { en: `Slot work around.` },
			hasDemo: false,
			isSpecial: true,
			name: 'toSlot',
			valueList: [
				{
					type: 'string',
					value: 'buttons'
				},
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'primary'
				},
				{
					type: 'string',
					value: 'secondary'
				},
				{
					type: 'string',
					value: 'start'
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
