import { blur } from '$lib/data/events/blur.data';
import { click } from '$lib/data/events/click.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { href } from '$lib/data/props/href.data';
import { mode } from '$lib/data/props/mode.data';
import { rel } from '$lib/data/props/rel.data';
import { routerDirection } from '$lib/data/props/router-direction.data';
import { svelteKitPrefetch } from '$lib/data/props/sveltekit-prefetch.data';
import { target } from '$lib/data/props/target.data';
import { slot } from '$lib/data/props/to-slot.data';
import { type } from '$lib/data/props/type-button.data';
import { defaultSlot } from '$lib/data/slots/default.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ButtonData: ComponentDataAPI = {
	description: {
		en: `Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.`
	},
	dispatchedEventList: [{ ...blur }, { ...focus }],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/buttons',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/buttons'
	},
	keyboardNavigationList: [],
	label: 'Button',
	methodList: [],
	name: 'button',
	propList: [
		{
			defaultValue: 'button',
			description: { en: `The type of the button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'buttonType',
			valueList: [
				{
					type: 'string',
					value: 'button'
				},
				{
					type: 'string',
					value: 'reset'
				},
				{
					type: 'string',
					value: 'submit'
				}
			]
		},
		{ ...color, hasDemo: true },
		{ ...disabled, hasDemo: true },
		{
			defaultValue: 'undefined',
			description: {
				en: `Set to "block" for a full-width button or to "full" for a full-width button without left and right borders.`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'expand',
			valueList: [
				{
					type: 'string',
					value: 'block'
				},
				{
					type: 'string',
					value: 'full'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `Set to "clear" for a transparent button, to "outline" for a transparent button with a border, or to "solid". The default style is "solid" except inside of a toolbar, where the default is "clear".`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'fill',
			valueList: [
				{
					type: 'string',
					value: 'clear'
				},
				{
					type: 'string',
					value: 'default'
				},
				{
					type: 'string',
					value: 'outline'
				},
				{
					type: 'string',
					value: 'solid'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...href },
		{ ...mode },
		{ ...rel },
		{ ...routerDirection },
		{
			defaultValue: 'undefined',
			description: { en: `Set to "round" for a button with rounded corners.` },
			hasDemo: true,
			isSpecial: false,
			name: 'shape',
			valueList: [
				{
					type: 'string',
					value: 'round'
				},
				{
					value: 'undefined',
					type: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `This attribute specifies the size of the button. Setting this attribute will change the height and padding of a button.`
			},
			hasDemo: true,
			isSpecial: false,
			name: 'size',
			valueList: [
				{
					type: 'string',
					value: 'default'
				},
				{
					type: 'string',
					value: 'large'
				},
				{
					type: 'string',
					value: 'small'
				}
			]
		},
		{
			defaultValue: 'false',
			description: { en: `If true, activates a button with a heavier font weight.` },
			hasDemo: true,
			isSpecial: false,
			name: 'strong',
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
		{ ...svelteKitPrefetch },
		{ ...target },
		{ ...slot },
		{ ...type }
	],
	slotList: [
		{ ...defaultSlot },
		{ ...end },
		{
			description: {
				en: `Should be used on an icon in a button that has no text.`
			},
			name: 'icon-only'
		},
		{ ...start }
	]
};
