import { didDismiss } from '$lib/data/events/did-dismiss.data';
import { didPresent } from '$lib/data/events/did-present.data';
import { willDismiss } from '$lib/data/events/will-dismiss.data';
import { willPresent } from '$lib/data/events/will-present.data';
import { animated } from '$lib/data/props/animated.data';
import { backdropDismiss } from '$lib/data/props/backdrop-dismiss.data';
import { keyboardClose } from '$lib/data/props/keyboard-close.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ActionSheetData: ComponentDataAPI = {
	description: {
		en: `An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in ios mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.`
	},
	dispatchedEventList: [
		{ ...didDismiss },
		{ ...didPresent },
		{ ...willDismiss },
		{ ...willPresent }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/action-sheet',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/action-sheet'
	},
	keyboardNavigationList: [],
	label: 'Action Sheet',
	methodList: [
		{
			description: { en: `Dismiss the action sheet overlay after it has been presented.` },
			name: 'dismiss',
			signature: `dismiss(data?: any, role?: string | undefined) => Promise<boolean>`
		},
		{
			description: { en: `Returns a promise that resolves when the action sheet did dismiss.` },
			name: 'onDidDismiss',
			signature: `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Returns a promise that resolves when the action sheet will dismiss.` },
			name: 'onWillDismiss',
			signature: `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`
		},
		{
			description: { en: `Present the action sheet overlay after it has been created.` },
			name: 'present',
			signature: `present() => Promise<void>`
		}
	],
	name: 'action-sheet',
	propList: [
		{ ...animated },
		{ ...backdropDismiss },
		{
			defaultValue: '[]',
			description: { en: `An array of buttons for the action sheet.` },
			hasDemo: false,
			isSpecial: false,
			name: 'buttons',
			valueList: [
				{
					type: '(string | ActionSheetButton<any>)[]',
					value: '[]'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `Title for the action sheet.` },
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
		{ ...keyboardClose },
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: { en: `Subtitle for the action sheet.` },
			hasDemo: false,
			isSpecial: false,
			name: 'subHeader',
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
			defaultValue: 'false',
			description: {
				en: `If true, the action sheet will be translucent. Only applies when the mode is "ios" and the device supports backdrop-filter.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'translucent',
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
		}
	],
	slotList: []
};
