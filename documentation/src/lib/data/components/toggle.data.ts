import { blur } from '$lib/data/events/blur.data';
import { change } from '$lib/data/events/change.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { value } from '$lib/data/props/value-checkbox.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ToggleData: ComponentDataAPI = {
	description: {
		en: `Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the checked property.`
	},
	dispatchedEventList: [{ ...blur }, { ...change }, { ...focus }],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/toggle',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/toggle'
	},
	keyboardNavigationList: [],
	label: 'Toggle',
	methodList: [],
	name: 'toggle',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the toggle is selected.` },
			hasDemo: false,
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
		{ ...mode },
		{ ...name },
		{ ...value }
	],
	slotList: []
};
