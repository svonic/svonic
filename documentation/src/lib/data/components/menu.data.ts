import { disabled } from '$lib/data/props/disabled.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const MenuData: ComponentDataAPI = {
	description: {
		en: `The Menu is a component that slides in from the side of the current view. By default, it slides in from the left, but the side can be overridden. The Menu will be displayed differently based on the mode, however the display type can be changed to any of the available Menu types. The Menu should be a sibling to the root Content component. There can be any number of Menus attached to the Content component. These can be controlled from the templates, or programmatically using the MenuController.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the Menu is closed.` },
			name: 'onIonDidClose'
		},
		{
			description: { en: `Emitted when the Menu is open.` },
			name: 'onIonDidOpen'
		},
		{
			description: { en: `Emitted when the Menu is about to be closed.` },
			name: 'ionWillClose'
		},
		{
			description: { en: `Emitted when the Menu is about to be is opened.` },
			name: 'ionWillOpen'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/menu',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/menu'
	},
	keyboardNavigationList: [],
	label: 'Menu',
	methodList: [
		{
			description: {
				en: `Closes the Menu. If the Menu is already closed or it can't be closed, it returns false.`
			},
			name: 'close',
			signature: `close(animated?: boolean) => Promise<boolean>`
		},
		{
			description: {
				en: `Returns true is the Menu is active.

			A Menu is active when it can be opened or closed, meaning it's enabled and it's not part of a SplitPane component.`
			},
			name: 'isActive',
			signature: `isActive() => Promise<boolean>`
		},
		{
			description: { en: `Returns true is the Menu is open.` },
			name: 'isOpen',
			signature: `isOpen() => Promise<boolean>`
		},
		{
			description: {
				en: `Opens the Menu. If the Menu is already open or it can't be opened, it returns false.`
			},
			name: 'open',
			signature: `open(animated?: boolean) => Promise<boolean>`
		},
		{
			description: {
				en: `Opens or closes the Menu. If the operation can't be completed successfully, it returns false.`
			},
			name: 'setOpen',
			signature: `setOpen(shouldOpen: boolean, animated?: boolean) => Promise<boolean>`
		},
		{
			description: {
				en: `Toggles the Menu. If the Menu is already open, it will try to close, otherwise it will try to open it.
			If the operation can't be completed successfully, it returns false.`
			},
			name: 'toggle',
			signature: `toggle(animated?: boolean) => Promise<boolean>`
		}
	],
	name: 'menu',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `The id of the main content. This is typically your main view's Content component. This is not the id of the Content inside of your Menu component.`
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
			description: { en: `An id for the Menu.` },
			hasDemo: false,
			isSpecial: false,
			name: 'menuId',
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
				en: `The edge threshold for dragging the Menu open. If a drag/swipe happens over this value, the Menu is not triggered.`
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
			description: { en: `Which side of the view the Menu should be placed.` },
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
			description: { en: `If true, swiping the Menu is enabled.` },
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
				en: `The display type of the Menu. Available options: "overlay", "reveal", "push".`
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
