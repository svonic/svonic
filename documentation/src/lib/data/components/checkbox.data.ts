import { blur } from '$lib/data/events/blur.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { slot } from '$lib/data/props/to-slot.data';
import { value } from '$lib/data/props/value-checkbox.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const CheckboxData: ComponentDataAPI = {
	description: {
		en: `Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the checked property. They can also be checked programmatically by setting the checked property.`
	},
	dispatchedEventList: [
		{ ...blur },
		{
			description: { en: `Emitted when the checked property has changed.` },
			name: 'ionChange'
		},
		{ ...focus }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/checkbox',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/checkbox'
	},
	keyboardNavigationList: [],
	label: 'Checkbox',
	methodList: [],
	name: 'checkbox',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the checkbox is selected.` },
			hasDemo: true,
			isSpecial: false,
			name: 'checked',
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
		{ ...color, hasDemo: true },
		{ ...disabled, hasDemo: true },
		{
			defaultValue: 'false',
			description: { en: `If true, the checkbox will visually appear as indeterminate.` },
			hasDemo: false,
			isSpecial: false,
			name: 'indeterminate',
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
		{ ...mode },
		{ ...name },
		{ ...slot },
		{ ...value }
	],
	slotList: []
};
