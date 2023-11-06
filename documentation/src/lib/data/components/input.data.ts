import { blur } from '$lib/data/events/blur.data';
import { change } from '$lib/data/events/change.data';
import { focus } from '$lib/data/events/focus.data';
import { input } from '$lib/data/events/input.data';
import { autocapitalize } from '$lib/data/props/autocapitalize.data';
import { autocomplete } from '$lib/data/props/autocomplete.data';
import { autocorrect } from '$lib/data/props/autocorrect.data';
import { autofocus } from '$lib/data/props/autofocus.data';
import { clearInput } from '$lib/data/props/clear-input.data';
import { clearOnEdit } from '$lib/data/props/clear-on-edit.data';
import { color } from '$lib/data/props/color.data';
import { debounce } from '$lib/data/props/debounce.data';
import { disabled } from '$lib/data/props/disabled.data';
import { enterKeyHint } from '$lib/data/props/enter-key-hint.data';
import { inputmode } from '$lib/data/props/input-mode.data';
import { maxlength } from '$lib/data/props/max-length.data';
import { max } from '$lib/data/props/max.data';
import { minlength } from '$lib/data/props/min-length.data';
import { min } from '$lib/data/props/min.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { placeholder } from '$lib/data/props/placeholder.data';
import { readonly } from '$lib/data/props/readonly.data';
import { required } from '$lib/data/props/required.data';
import { spellcheck } from '$lib/data/props/spellcheck.data';
import { type } from '$lib/data/props/type-input.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const InputData: ComponentDataAPI = {
	description: {
		en: `The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

	It is meant for text type inputs only, such as "text", "password", "email", "number", "search", "tel", and "url". It supports all standard text input events including keyup, keydown, keypress, and more.`
	},
	dispatchedEventList: [{ ...blur }, { ...change }, { ...focus }, { ...input }],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/input',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/input'
	},
	keyboardNavigationList: [],
	label: 'Input',
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
	name: 'input',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `If the value of the type attribute is "file", then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'accept',
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
		{ ...autocapitalize },
		{ ...autocomplete },
		{ ...autocorrect },
		{ ...autofocus },
		{ ...clearInput },
		{ ...clearOnEdit },
		{ ...color },
		{ ...debounce },
		{ ...disabled },
		{ ...enterKeyHint },
		{ ...inputmode },
		{ ...max },
		{ ...maxlength },
		{ ...min },
		{ ...minlength },
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: {
				en: `If true, the user can enter more than one value. This attribute applies when the type attribute is set to "email" or "file", otherwise it is ignored.`
			},
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
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...name },
		{
			defaultValue: 'undefined',
			description: {
				en: `A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is "text", "search", "tel", "url", "email", "date", or "password", otherwise it is ignored. When the type attribute is "date", pattern will only be used in browsers that do not support the "date" input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'pattern',
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
		{ ...placeholder },
		{ ...readonly },
		{ ...required },
		{
			defaultValue: 'undefined',
			description: {
				en: `The initial size of the control. This value is in pixels unless the value of the type attribute is "text" or "password", in which case it is an integer number of characters. This attribute applies only when the type attribute is set to "text", "search", "tel", "url", "email", or "password", otherwise it is ignored.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'size',
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
		{
			defaultValue: 'undefined',
			description: {
				en: `Works with the min and max attributes to limit the increments at which a value can be set.
			Possible values are: "any" or a positive floating point number.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'step',
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
		{ ...type },
		{ ...value }
	],
	slotList: []
};
