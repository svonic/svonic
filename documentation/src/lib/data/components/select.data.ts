import { blur } from '$lib/data/events/blur.data';
import { change } from '$lib/data/events/change.data';
import { focus } from '$lib/data/events/focus.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const SelectData: ComponentDataAPI = {
	description: {
		en: `Selects are form controls to select an option, or options, from a set of options, similar to a native <select> element. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.

	A select should be used with child SelectOption components. If the child option is not given a value attribute then its text will be used as the value.

	If value is set on the Select, the selected option will be chosen based on that value.`
	},
	dispatchedEventList: [
		{ ...blur },
		{
			description: { en: `Emitted when the selection is cancelled.` },
			name: 'svo:cancel'
		},
		{ ...change },
		{
			description: { en: `Emitted when the overlay is dismissed.` },
			name: 'svo:dismiss'
		},
		{ ...focus }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/select',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/select'
	},
	keyboardNavigationList: [],
	label: 'Select',
	methodList: [
		{
			description: {
				en: `Open the select overlay. The overlay is either an alert, action sheet, or popover,
			depending on the interfaceType property on the Select.`
			},
			name: 'open',
			signature: `open(event?: UIEvent | undefined) => Promise<any>`
		}
	],
	name: 'select',
	propList: [
		{
			defaultValue: 'Cancel',
			description: { en: `The text to display on the cancel button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'cancelText',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `A property name or function used to compare object values.` },
			hasDemo: false,
			isSpecial: false,
			name: 'compareWith',
			valueList: [
				{
					type: 'function',
					value: '((currentValue: any, compareValue: any) => boolean)'
				},
				{
					type: 'null',
					value: 'null'
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
		{ ...disabled },
		{
			defaultValue: 'alert',
			description: { en: `The interface the select should use: action-sheet, popover or alert.` },
			hasDemo: false,
			isSpecial: false,
			name: 'interfaceType',
			valueList: [
				{
					type: 'string',
					value: 'action-sheet'
				},
				{
					type: 'string',
					value: 'alert'
				},
				{
					type: 'string',
					value: 'popover'
				}
			]
		},
		{
			defaultValue: '{}',
			description: {
				en: `Any additional options that the alert, action-sheet or popover interface
			can take.

			Note: interfaceOptions will not override inputs or buttons with the alert interface.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'interfaceOptions',
			valueList: [
				{
					type: 'object',
					value: 'object'
				}
			]
		},
		{ ...mode },
		{
			defaultValue: 'false',
			description: { en: `If true, the select can accept multiple values.` },
			hasDemo: false,
			isSpecial: false,
			name: 'multiple',
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
		{ ...name },
		{
			defaultValue: 'OK',
			description: { en: `The text to display on the ok button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'okText',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `The text to display when the select is empty.` },
			hasDemo: false,
			isSpecial: false,
			name: 'placeholder',
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
			description: { en: `The text to display instead of the selected option's value.` },
			hasDemo: false,
			isSpecial: false,
			name: 'selectedText',
			valueList: [
				{
					type: 'null',
					value: 'null'
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
		{ ...value }
	],
	slotList: []
};
