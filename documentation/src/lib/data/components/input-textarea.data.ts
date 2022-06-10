import { blur } from '$lib/data/events/blur.data';
import { change } from '$lib/data/events/change.data';
import { focus } from '$lib/data/events/focus.data';
import { input } from '$lib/data/events/input.data';
import { autocapitalize } from '$lib/data/props/autocapitalize.data';
import { autofocus } from '$lib/data/props/autofocus.data';
import { clearOnEdit } from '$lib/data/props/clear-on-edit.data';
import { color } from '$lib/data/props/color.data';
import { debounce } from '$lib/data/props/debounce.data';
import { disabled } from '$lib/data/props/disabled.data';
import { enterKeyHint } from '$lib/data/props/enter-key-hint.data';
import { inputMode } from '$lib/data/props/input-mode.data';
import { maxLength } from '$lib/data/props/max-length.data';
import { minLength } from '$lib/data/props/min-length.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { placeholder } from '$lib/data/props/placeholder.data';
import { readonly } from '$lib/data/props/readonly.data';
import { required } from '$lib/data/props/required.data';
import { spellcheck } from '$lib/data/props/spellcheck.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const InputTextareaData: ComponentDataAPI = {
	description: {
		en: `The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

	Unlike the native textarea element, the Textarea component does not support loading its value from the inner content. The textarea value should be set in the value attribute.

	The textarea component accepts the native textarea attributes in addition to the Textarea component properties.`
	},
	dispatchedEventList: [{ ...blur }, { ...change }, { ...focus }, { ...input }],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/textarea',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/textarea'
	},
	keyboardNavigationList: [],
	label: 'Input Textarea',
	methodList: [
		{
			name: 'getInputElement',
			description: { en: `Returns the native <input> element used under the hood.` },
			signature: `getInputElement() => Promise<HTMLInputElement>`
		},
		{
			name: 'setFocus',
			description: {
				en: `Sets focus on the native input in the Input component. Use this method instead of the global input.focus().`
			},
			signature: `setFocus() => Promise<void>`
		}
	],
	name: 'input-textarea',
	propList: [
		{ ...autocapitalize },
		{ ...autofocus },
		{
			defaultValue: 'false',
			description: { en: `If true, the element height will increase based on the value.` },
			hasDemo: false,
			isSpecial: false,
			name: 'autoGrow',
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
		{ ...clearOnEdit },
		{ ...color },
		{
			defaultValue: 'false',
			description: {
				en: `The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'cols',
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
		{ ...debounce },
		{ ...disabled },
		{ ...enterKeyHint },
		{ ...inputMode },
		{ ...maxLength },
		{ ...minLength },
		{ ...mode },
		{ ...name },
		{ ...placeholder },
		{ ...readonly },
		{ ...required },
		{
			defaultValue: 'false',
			description: { en: `The number of visible text lines for the control.` },
			hasDemo: false,
			isSpecial: false,
			name: 'rows',
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
		{ ...spellcheck },
		{ ...value },
		{
			defaultValue: 'false',
			description: { en: `Indicates how the control wraps text.` },
			hasDemo: false,
			isSpecial: false,
			name: 'wrap',
			valueList: [
				{
					type: 'string',
					value: 'hard'
				},
				{
					type: 'string',
					value: 'off'
				},
				{
					type: 'string',
					value: 'soft'
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
