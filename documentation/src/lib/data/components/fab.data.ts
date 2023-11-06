import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const FabData: ComponentDataAPI = {
	description: {
		en: `Fabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content. Fab should have one main fab-button. Fabs can also contain Fab Lists which contain related buttons that show when the main fab button is clicked. The same fab container can contain several Fab List elements with different side values.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/fab',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/fab'
	},
	keyboardNavigationList: [],
	label: 'Fab',
	methodList: [
		{
			description: { en: `Close an active FAB List container.` },
			name: 'close',
			signature: `close() => Promise<void>`
		}
	],
	name: 'fab',
	propList: [
		{
			defaultValue: 'false',
			description: {
				en: `If true, both the Fab Button and all Fab Lists inside Fab will become active.
			That means the Fab Button will become a close icon and Fab List will become visible.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'activated',
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
			defaultValue: 'false',
			description: {
				en: `If true, the fab will display on the edge of the header if
			vertical is "top", and on the edge of the footer if it is "bottom". Should be used with a fixed slot.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'edge',
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
			description: { en: `Where to align the fab horizontally in the viewport.` },
			hasDemo: false,
			isSpecial: false,
			name: 'horizontal',
			valueList: [
				{
					type: 'string',
					value: 'center'
				},
				{
					type: 'string',
					value: 'end'
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
		},
		{
			defaultValue: 'undefined',
			description: { en: `Where to align the fab vertically in the viewport.` },
			hasDemo: false,
			isSpecial: false,
			name: 'vertical',
			valueList: [
				{
					type: 'string',
					value: 'bottom'
				},
				{
					type: 'string',
					value: 'center'
				},
				{
					type: 'string',
					value: 'top'
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
