import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const SegmentData: ComponentDataAPI = {
	description: {
		en: `Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

	Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content.`
	},
	dispatchedEventList: [
		{
			description: {
				en: `Emitted when the value property has changed and any dragging pointer has been released from ion-segment.`
			},
			name: 'ionChange'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/segment',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/segment'
	},
	keyboardNavigationList: [
		{
			description: {
				en: `The component has full keyboard support for navigating between and selecting SegmentButton components. By default, keyboard navigation will only focus SegmentButton components, but you can use the selectOnFocus property to ensure that they get selected on focus as well.`
			},
			valueList: [
				{
					function: { en: `Focuses the previous focusable element.` },
					key: 'Arrow Left',
					keyCodeList: [
						{
							key: ['◀︎']
						}
					]
				},
				{
					function: { en: `Focuses the next focusable element.` },
					key: 'Arrow Right',
					keyCodeList: [
						{
							key: ['▶︎']
						}
					]
				},
				{
					function: { en: `Focuses the last focusable element.` },
					key: 'End',
					keyCodeList: [
						{
							key: ['End']
						}
					]
				},
				{
					function: { en: `Focuses the first focusable element.` },
					key: 'Home',
					keyCodeList: [
						{
							key: ['Home']
						}
					]
				},
				{
					function: { en: `Selects the element that is currently focused.` },
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
		}
	],
	label: 'Segment',
	methodList: [],
	name: 'segment',
	propList: [
		{ ...color, hasDemo: true },
		{ ...disabled, hasDemo: true },
		{ ...mode },
		{
			defaultValue: 'false',
			description: {
				en: `If true, the segment buttons will overflow and the user can swipe to see them.
			In addition, this will disable the gesture to drag the indicator between the buttons
			in order to swipe to see hidden buttons.`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'scrollable',
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
				en: `If true, navigating to an SegmentButton with the keyboard will focus and select the element.
			If false, keyboard navigation will only focus the SegmentButton element.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'selectOnFocus',
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
			defaultValue: 'true',
			description: {
				en: `If true, users will be able to swipe between segment buttons to activate them.`
			},
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
		{ ...slot },
		{ ...value }
	],
	slotList: []
};
