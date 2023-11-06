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
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ModalData: ComponentDataAPI = {
	description: {
		en: `A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted after the modal breakpoint has changed.` },
			name: 'ionBreakpointDidChange'
		},
		{ ...didDismiss },
		{ ...didPresent },
		{ ...willDismiss },
		{ ...willPresent }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/modal',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/modal'
	},
	keyboardNavigationList: [],
	label: 'Modal',
	methodList: [
		{
			description: { en: `Dismiss the modal overlay after it has been presented.` },
			name: 'dismiss',
			signature: `dismiss(data?: any, role?: string | undefined) => Promise<boolean>`
		},
		{
			description: { en: `Returns the current breakpoint of a sheet style modal.` },
			name: 'getCurrentBreakpoint',
			signature: `getCurrentBreakpoint() => Promise<number | undefined>`
		},
		{
			description: { en: `Returns a promise that resolves when the modal did dismiss.` },
			name: 'onDidDismiss',
			signature: `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Returns a promise that resolves when the modal will dismiss.` },
			name: 'onWillDismiss',
			signature: `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Present the modal overlay after it has been created.` },
			name: 'present',
			signature: `present() => Promise<void>`
		},
		{
			description: {
				en: `Move a sheet style modal to a specific breakpoint. The breakpoint value must be a value defined in your breakpoints array.`
			},
			name: 'setCurrentBreakpoint',
			signature: `setCurrentBreakpoint(breakpoint: number) => Promise<void>`
		}
	],
	name: 'modal',
	propList: [
		{ ...animated },
		{
			defaultValue: '0',
			description: {
				en: `A decimal value between 0 and 1 that indicates the
			point after which the backdrop will begin to fade in
			when using a sheet modal. Prior to this point, the
			backdrop will be hidden and the content underneath
			the sheet can be interacted with. This value is exclusive
			meaning the backdrop will become active after the value
			specified.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'backdropBreakpoint',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{ ...backdropDismiss },
		{
			defaultValue: 'undefined',
			description: {
				en: `Determines whether or not a modal can dismiss
			when calling the dismiss method.

			If the value is true or the value's function returns true, the modal will close when trying to dismiss.
			If the value is false or the value's function returns false, the modal will not close when trying to dismiss.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'canDismiss',
			valueList: [
				{
					type: '() => Promise<boolean>',
					value: '() => Promise<boolean>'
				},
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `The horizontal line that displays at the top of a sheet modal. It is true by default when setting the breakpoints and initialBreakpoint properties.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'handle',
			valueList: [
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `A decimal value between 0 and 1 that indicates the
			initial point the modal will open at when creating a sheet modal.
			This value must also be listed in the breakpoints array.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'initialBreakpoint',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...isOpen },
		{ ...keyboardClose },
		{ ...mode },
		{ ...showBackdrop },
		{
			defaultValue: 'false',
			description: { en: `If true, the modal can be swiped to dismiss. Only applies in iOS mode.` },
			hasDemo: false,
			isSpecial: false,
			name: 'swipeToClose',
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
				en: `An ID corresponding to the trigger element that causes the modal to open when clicked.`
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
		}
	],
	slotList: []
};
