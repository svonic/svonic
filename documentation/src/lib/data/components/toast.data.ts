import { click } from '$lib/data/events/click.data';
import { didDismiss } from '$lib/data/events/did-dismiss.data';
import { didPresent } from '$lib/data/events/did-present.data';
import { willDismiss } from '$lib/data/events/will-dismiss.data';
import { willPresent } from '$lib/data/events/will-present.data';
import { animated } from '$lib/data/props/animated.data';
import { color } from '$lib/data/props/color.data';
import { keyboardClose } from '$lib/data/props/keyboard-close.data';
import { mode } from '$lib/data/props/mode.data';
import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ToastData: ComponentDataAPI = {
	description: {
		en: `A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.`
	},
	dispatchedEventList: [
		{ ...didDismiss },
		{ ...didPresent },
		{ ...willDismiss },
		{ ...willPresent }
	],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/toast',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/toast'
	},
	keyboardNavigationList: [],
	label: 'Toast',
	methodList: [
		{
			description: { en: `Dismiss the toast overlay after it has been presented.` },
			name: 'dismiss',
			signature: `dismiss(data?: any, role?: string | undefined) => Promise<boolean>`
		},
		{
			description: { en: `Returns a promise that resolves when the toast did dismiss.` },
			name: 'onDidDismiss',
			signature: `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Returns a promise that resolves when the toast will dismiss.` },
			name: 'onWillDismiss',
			signature: `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Present the toast overlay after it has been created.` },
			name: 'present',
			signature: `present() => Promise<void>`
		}
	],
	name: 'toast',
	propList: [
		{ ...animated },
		{
			defaultValue: 'undefined',
			description: { en: `An array of buttons for the toast.` },
			hasDemo: false,
			isSpecial: false,
			name: 'buttons',
			valueList: [
				{
					type: 'string[]',
					value: 'string[]'
				},
				{
					type: 'ToastButton[]',
					value: 'ToastButton[]'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...color },
		{
			defaultValue: '0',
			description: {
				en: `Duration of the spinner animation in milliseconds. The default varies based on the spinner.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'duration',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `Header to be shown in the toast.` },
			hasDemo: false,
			isSpecial: false,
			name: 'header',
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
			defaultValue: 'undefined',
			description: { en: `The name of the icon to display, or the path to a valid SVG file.` },
			hasDemo: false,
			isSpecial: false,
			name: 'icon',
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
		{ ...keyboardClose, defaultValue: 'false' },
		{
			defaultValue: 'undefined',
			description: { en: `Message to be shown in the toast.` },
			hasDemo: false,
			isSpecial: false,
			name: 'message',
			valueList: [
				{
					type: 'IonicSafeString',
					value: 'IonicSafeString'
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
		},
		{ ...mode },
		{
			defaultValue: 'bottom',
			description: { en: `The position of the toast on the screen.` },
			hasDemo: false,
			isSpecial: false,
			name: 'position',
			valueList: [
				{
					type: 'string',
					value: 'bottom'
				},
				{
					type: 'string',
					value: 'middle'
				},
				{
					type: 'string',
					value: 'top'
				}
			]
		},
		{ ...translucent }
	],
	slotList: []
};
