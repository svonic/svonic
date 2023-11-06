import { click } from '$lib/data/events/click.data';
import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const IoniconData: ComponentDataAPI = {
	description: { en: `Component to display an icon from the Ionicons library.` },
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionic.io/ionicons/usage',
		sourceUrl: 'https://github.com/ionic-team/ionicons/tree/main/src/components/icon'
	},
	keyboardNavigationList: [],
	label: 'Ionicon',
	methodList: [],
	name: 'ionicon',
	propList: [
		{ ...color, description: { en: 'The color to use for the background of the icon.' } },
		{
			defaultValue: 'undefined',
			description: { en: `Specifies whether the icon should horizontally flip when dir is "rtl".` },
			hasDemo: false,
			isSpecial: false,
			name: 'flipRtl',
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
		{
			defaultValue: 'undefined',
			description: {
				en: `A combination of both name and src. If a src url is detected it will set the src property. Otherwise it assumes it's a built-in named SVG and set the name property.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'icon',
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
			description: { en: `Specifies which icon to use on ios mode.` },
			hasDemo: false,
			isSpecial: false,
			name: 'ios',
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
			description: { en: `Specifies the exact src of an SVG file to use for the icon in ios mode` },
			hasDemo: false,
			isSpecial: true,
			name: 'iosIcon',
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
				en: `If enabled, Icon will be loaded lazily when it's visible in the viewport. Default, false.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'lazy',
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
			defaultValue: 'undefined',
			description: { en: `Specifies which icon to use on md mode.` },
			hasDemo: false,
			isSpecial: false,
			name: 'md',
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
			description: { en: `Specifies the exact src of an SVG file to use for the icon in md mode` },
			hasDemo: false,
			isSpecial: true,
			name: 'mdIcon',
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
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: { en: `Specifies which icon to use from the built-in set of icons.` },
			hasDemo: false,
			isSpecial: false,
			name: 'name',
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
			defaultValue: 'true',
			description: {
				en: `When set to false, SVG content that is HTTP fetched will not be checked if the response SVG content has any <script> elements, or any attributes that start with on, such as onclick.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'sanitize',
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
			defaultValue: 'undefined',
			description: { en: `The size of the icon. Available options are: "small" and "large".` },
			hasDemo: false,
			isSpecial: false,
			name: 'size',
			valueList: [
				{
					type: 'string',
					value: 'large'
				},
				{
					type: 'string',
					value: 'small'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `Specifies the exact src of an SVG file to use.` },
			hasDemo: false,
			isSpecial: false,
			name: 'src',
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
		{ ...slot }
	],
	slotList: []
};
