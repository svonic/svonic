import { blur } from '$lib/data/events/blur.data';
import { change } from '$lib/data/events/change.data';
import { focus } from '$lib/data/events/focus.data';
import { input } from '$lib/data/events/input.data';
import { animated } from '$lib/data/props/animated.data';
import { autocomplete } from '$lib/data/props/autocomplete.data';
import { autocorrect } from '$lib/data/props/autocorrect.data';
import { color } from '$lib/data/props/color.data';
import { debounce } from '$lib/data/props/debounce.data';
import { disabled } from '$lib/data/props/disabled.data';
import { enterKeyHint } from '$lib/data/props/enter-key-hint.data';
import { inputmode } from '$lib/data/props/input-mode.data';
import { mode } from '$lib/data/props/mode.data';
import { placeholder } from '$lib/data/props/placeholder.data';
import { spellcheck } from '$lib/data/props/spellcheck.data';
import { type } from '$lib/data/props/type-input.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const SearchbarData: ComponentDataAPI = {
	description: {
		en: `Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.

	A Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.`
	},
	dispatchedEventList: [
		{ ...blur },
		{
			description: { en: `Emitted when the cancel button is clicked.` },
			name: 'ionCancel'
		},
		{ ...change },
		{
			description: { en: `Emitted when the clear input button is clicked.` },
			name: 'ionClear'
		},
		{ ...focus },
		{ ...input }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/searchbar',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/searc'
	},
	keyboardNavigationList: [],
	label: 'Searchbar',
	methodList: [
		{
			description: { en: `Returns the native <input> element used under the hood.` },
			name: 'getInputElement',
			signature: `getInputElement() => Promise<HTMLInputElement>`
		},
		{
			description: {
				en: `Sets focus on the specified Searchbar. Use this method instead of the global input.focus().`
			},
			name: 'setFocus',
			signature: `setFocus() => Promise<void>`
		}
	],
	name: 'searchbar',
	propList: [
		{ ...animated, defaultValue: 'false' },
		{ ...autocomplete },
		{ ...autocorrect },
		{
			defaultValue: 'arrowBackSharp',
			description: {
				en: `Set the cancel button icon. Only applies to md mode.
			Defaults to arrowBackSharp.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'cancelButtonIcon',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'Cancel',
			description: { en: `Set the the cancel button text. Only applies to ios mode.` },
			hasDemo: false,
			isSpecial: false,
			name: 'cancelButtonText',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `Set the clear icon. Defaults to close-circle for ios and close-sharp for md.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'clearIcon',
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
		{ ...color },
		{ ...debounce, defaultValue: '250' },
		{ ...disabled },
		{ ...enterKeyHint },
		{ ...inputmode },
		{ ...mode },
		{ ...placeholder, defaultValue: 'Search' },
		{
			defaultValue: 'searchSharp',
			description: {
				en: `The icon to use as the search icon. Defaults to searchOutline in
			ios mode and searchSharp in md mode.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'searchIcon',
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
			defaultValue: 'never',
			description: {
				en: `Sets the behavior for the cancel button. Defaults to "never".
			Setting to "focus" shows the cancel button on focus.
			Setting to "never" hides the cancel button.
			Setting to "always" shows the cancel button regardless of focus state.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'showCancelButton',
			valueList: [
				{
					type: 'string',
					value: 'always'
				},
				{
					type: 'string',
					value: 'focus'
				},
				{
					type: 'string',
					value: 'never'
				}
			]
		},
		{
			defaultValue: 'always',
			description: {
				en: `Sets the behavior for the clear button. Defaults to "focus".
			Setting to "focus" shows the clear button on focus if the input is not empty.
			Setting to "never" hides the clear button.
			Setting to "always" shows the clear button regardless
			of focus state, but only if the input is not empty.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'showClearButton',
			valueList: [
				{
					type: 'string',
					value: 'always'
				},
				{
					type: 'string',
					value: 'focus'
				},
				{
					type: 'string',
					value: 'never'
				}
			]
		},
		{ ...spellcheck },
		{ ...type },
		{ ...value }
	],
	slotList: []
};
