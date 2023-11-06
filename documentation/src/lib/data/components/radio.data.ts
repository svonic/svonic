import { blur } from '$lib/data/events/blur.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import { slot } from '$lib/data/props/to-slot.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const RadioData: ComponentDataAPI = {
	description: {
		en: `Radios should be used inside of an RadioGroup component. Pressing on a radio will check it. They can also be checked programmatically by setting the value property of the parent RadioGroup component to the value of the radio.

	When radios are inside of a radio group, only one radio in the group will be checked at any time. Pressing a radio will check it and uncheck the previously selected radio, if there is one. If a radio is not in a group with another radio, then both radios will have the ability to be checked at the same time.`
	},
	dispatchedEventList: [{ ...blur }, { ...focus }],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/radio',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/radio'
	},
	keyboardNavigationList: [],
	label: 'Radio',
	methodList: [],
	name: 'radio',
	propList: [
		{ ...color, hasDemo: true },
		{ ...disabled },
		{ ...mode },
		{ ...name },
		{ ...slot },
		{ ...value }
	],
	slotList: []
};
