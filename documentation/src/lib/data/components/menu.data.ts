import { didDismiss } from '$lib/data/events/did-dismiss.data';
import { didPresent } from '$lib/data/events/did-present.data';
import { willDismiss } from '$lib/data/events/will-dismiss.data';
import { willPresent } from '$lib/data/events/will-present.data';
import { animated } from '$lib/data/props/animated.data';
import { backdropDismiss } from '$lib/data/props/backdrop-dismiss.data';
import { isOpen } from '$lib/data/props/is-open.data';
import { keyboardClose } from '$lib/data/props/keyboard-close.data';
import { mode } from '$lib/data/props/mode.data';
import { showBackdrop } from '$lib/data/props/show-backdrop.data';
import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const MenuData: ComponentDataAPI = {
	description: {
		en: `A Menu is a dialog that appears on top of the current page. It can be used for anything, but generally it is used for overflow actions that don't fit in the navigation bar.`
	},
	dispatchedEventList: [
		{ ...didDismiss },
		{ ...didPresent },
		{ ...willDismiss },
		{ ...willPresent }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/popover',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/popover'
	},
	keyboardNavigationList: [
		{
			description: {
				en: `Menu has basic keyboard support for navigating between focusable elements inside of the Menu.`
			},
			valueList: [
				{
					function: { en: `Moves focus to the next focusable element.` },
					key: 'Tab',
					keyCodeList: [
						{
							key: ['Tab']
						}
					]
				},
				{
					function: { en: `Moves focus to the previous focusable element.` },
					key: 'Shift + Tab',
					keyCodeList: [
						{
							key: ['Shift']
						},
						{
							key: ['Tab']
						}
					]
				},
				{
					function: { en: `Closes the menu.` },
					key: 'Esc',
					keyCodeList: [
						{
							key: ['Esc']
						}
					]
				},
				{
					function: { en: `Clicks the focusable element.` },
					key: 'Space or Enter',
					keyCodeList: [
						{
							key: ['Space']
						},
						{
							key: ['Enter']
						}
					]
				}
			]
		},
		{
			description: {
				en: `Menu has full arrow key support for navigating between Item components with the button property. The most common use case for this is as a dropdown menu in a desktop-focused application. In addition to the basic keyboard support, the following table details arrow key support for dropdown menus.`
			},
			valueList: [
				{
					function: { en: `Moves focus to the previous focusable element.` },
					key: 'Arrow Up',
					keyCodeList: [
						{
							key: ['▲']
						}
					]
				},
				{
					function: { en: `Moves focus to the next focusable element.` },
					key: 'Arrow Down',
					keyCodeList: [
						{
							key: ['▼']
						}
					]
				},
				{
					function: { en: `Moves focus to the first focusable element.` },
					key: 'Home',
					keyCodeList: [
						{
							key: ['Home']
						}
					]
				},
				{
					function: { en: `Moves focus to the last focusable element.` },
					key: 'End',
					keyCodeList: [
						{
							key: ['End']
						}
					]
				},
				{
					function: {
						en: `When used in a child Menu, closes the Menu and returns focus to the parent Menu.`
					},
					key: 'Arrow Left',
					keyCodeList: [
						{
							key: ['◀︎']
						}
					]
				},
				{
					function: { en: `When focusing a trigger element, opens the associated Menu.` },
					key: 'Space, Enter, and Arrow Right',
					keyCodeList: [
						{
							key: ['Space']
						},
						{
							key: ['Enter']
						},
						{
							key: ['▶︎']
						}
					]
				}
			]
		}
	],
	label: 'Menu',
	methodList: [
		{
			description: { en: `Dismiss the Menu overlay after it has been presented.` },
			name: 'dismiss',
			signature: `dismiss(data?: any, role?: string | undefined, dismissParentMenu?: boolean) => Promise<boolean>`
		},
		{
			description: { en: `Returns a promise that resolves when the Menu did dismiss.` },
			name: 'onDidDismiss',
			signature: `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Returns a promise that resolves when the Menu will dismiss.` },
			name: 'onWillDismiss',
			signature: `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: {
				en: `Present the Menu overlay after it has been created.
			Developers can pass a mouse, touch, or pointer event
			to position the Menu relative to where that event was dispatched.`
			},
			name: 'present',
			signature: `present(event?: MouseEvent | TouchEvent | PointerEvent | CustomEvent<any> | undefined) => Promise<void>`
		}
	],
	name: 'menu',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `Describes how to align the Menu content with the reference point.
			Defaults to 'center' for ios mode, and 'start' for md mode.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'alignment',
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
		{ ...animated },
		{
			defaultValue: 'true',
			description: {
				en: `If true, the Menu will display an arrow that points at the reference when running in ios mode. Does not apply in md mode.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'arrow',
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
		{ ...backdropDismiss },
		{
			defaultValue: 'false',
			description: {
				en: `If true, the Menu will be automatically dismissed when the content has been clicked.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'dismissOnSelect',
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
		{ ...isOpen },
		{ ...keyboardClose },
		{ ...mode },
		{
			defaultValue: 'trigger',
			description: {
				en: `Describes what to position the Menu relative to.
			If 'trigger', the Menu will be positioned relative
			to the trigger button. If passing in an event, this is
			determined via event.target.
			If 'event', the Menu will be positioned relative
			to the x/y coordinates of the trigger action. If passing
			in an event, this is determined via event.clientX and event.clientY.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'reference',
			valueList: [
				{
					type: 'string',
					value: 'event'
				},
				{
					type: 'string',
					value: 'trigger'
				}
			]
		},
		{ ...showBackdrop },
		{
			defaultValue: 'bottom',
			description: {
				en: `Describes which side of the reference point to position
			the Menu on. The 'start' and 'end' values are RTL-aware,
			and the 'left' and 'right' values are not.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'side',
			valueList: [
				{
					type: 'string',
					value: 'bottom'
				},
				{
					type: 'string',
					value: 'end'
				},
				{
					type: 'string',
					value: 'left'
				},
				{
					type: 'string',
					value: 'right'
				},
				{
					type: 'string',
					value: 'start'
				},
				{
					type: 'string',
					value: 'top'
				}
			]
		},
		{
			defaultValue: 'auto',
			description: {
				en: `Describes how to calculate the Menu width.
			If 'cover', the Menu width will match the width of the trigger.
			If 'auto', the Menu width will be determined by the content in
			the Menu.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'size',
			valueList: [
				{
					type: 'string',
					value: 'auto'
				},
				{
					type: 'string',
					value: 'cover'
				}
			]
		},
		{ ...translucent },
		{
			defaultValue: 'undefined',
			description: {
				en: `An ID corresponding to the trigger element that
			causes the Menu to open. Use the trigger-action
			property to customize the interaction that results in the Menu opening.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'trigger',
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
			defaultValue: 'click',
			description: {
				en: `Describes what kind of interaction with the trigger that
			should cause the Menu to open. Does not apply when the trigger property is undefined.
			If 'click', the Menu will be presented when the trigger is left clicked.
			If 'hover', the Menu will be presented when a pointer hovers over the trigger.
			If 'context-menu', the Menu will be presented when the trigger is right
			clicked on desktop and long pressed on mobile. This will also prevent your
			device's normal context menu from appearing.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'triggerAction',
			valueList: [
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'string',
					value: 'context-menu'
				},
				{
					type: 'string',
					value: 'hover'
				}
			]
		}
	],
	slotList: []
};
