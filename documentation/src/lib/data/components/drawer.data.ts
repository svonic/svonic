import { disabled } from '$lib/data/props/disabled.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const DrawerData: ComponentDataAPI = {
	description: {
		en: `The Drawer is a component that slides in from the side of the current view. By default, it slides in from the left, but the side can be overridden. The Drawer will be displayed differently based on the mode, however the display type can be changed to any of the available Drawer types. The Drawer should be a sibling to the root Content component. There can be any number of Drawers attached to the Content component. These can be controlled from the templates, or programmatically using the DrawerController.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the Drawer is closed.` },
			name: 'svo:did-close'
		},
		{
			description: { en: `Emitted when the Drawer is open.` },
			name: 'svo:did-open'
		},
		{
			description: { en: `Emitted when the Drawer is about to be closed.` },
			name: 'svo:will-close'
		},
		{
			description: { en: `Emitted when the Drawer is about to be is opened.` },
			name: 'svo:will-open'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/menu',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/menu'
	},
	keyboardNavigationList: [],
	label: 'Drawer',
	methodList: [
		{
			description: {
				en: `Closes the Drawer. If the Drawer is already closed or it can't be closed, it returns false.`
			},
			name: 'close',
			signature: `close(animated?: boolean) => Promise<boolean>`
		},
		{
			description: {
				en: `Returns true is the Drawer is active.

			A Drawer is active when it can be opened or closed, meaning it's enabled and it's not part of a SplitPane component.`
			},
			name: 'isActive',
			signature: `isActive() => Promise<boolean>`
		},
		{
			description: { en: `Returns true is the Drawer is open.` },
			name: 'isOpen',
			signature: `isOpen() => Promise<boolean>`
		},
		{
			description: {
				en: `Opens the Drawer. If the Drawer is already open or it can't be opened, it returns false.`
			},
			name: 'open',
			signature: `open(animated?: boolean) => Promise<boolean>`
		},
		{
			description: {
				en: `Opens or closes the Drawer. If the operation can't be completed successfully, it returns false.`
			},
			name: 'setOpen',
			signature: `setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>`
		},
		{
			description: {
				en: `Toggles the Drawer. If the Drawer is already open, it will try to close, otherwise it will try to open it.
			If the operation can't be completed successfully, it returns false.`
			},
			name: 'toggle',
			signature: `toggle(animated?: boolean) => Promise<boolean>`
		}
	],
	name: 'drawer',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `The id of the main content. This is typically your main view's Content component. This is not the id of the Content inside of your Drawer component.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'contentId',
			valueList: [
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...disabled },
		{
			defaultValue: 'undefined',
			description: { en: `An id for the Drawer.` },
			hasDemo: false,
			isSpecial: false,
			name: 'id',
			valueList: [
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: '50',
			description: {
				en: `The edge threshold for dragging the Drawer open. If a drag/swipe happens over this value, the Drawer is not triggered.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'maxEdgeStart',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{
			defaultValue: 'start',
			description: { en: `Which side of the view the Drawer should be placed.` },
			hasDemo: false,
			isSpecial: false,
			name: 'side',
			valueList: [
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'start'
				}
			]
		},
		{
			defaultValue: 'true',
			description: { en: `If true, swiping the Drawer is enabled.` },
			hasDemo: false,
			isSpecial: false,
			name: 'swipeGesture',
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
				en: `The display type of the Drawer. Available options: "overlay", "reveal", "push".`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'type',
			valueList: [
				{
					type: 'string',
					value: 'overlay'
				},
				{
					type: 'string',
					value: 'reveal'
				},
				{
					type: 'string',
					value: 'push'
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
