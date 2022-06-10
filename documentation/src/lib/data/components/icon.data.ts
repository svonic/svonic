import { click } from '$lib/data/events/click.data';
import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { toSlot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const IconData: ComponentDataAPI = {
	description: {
		en: `Component to display an icon. If you are using the Ionicons library, you can use the Ionicon component instead.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: '',
		sourceUrl: ''
	},
	keyboardNavigationList: [],
	label: 'Icon',
	methodList: [],
	name: 'icon',
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
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: { en: `Specifies the exact src of an SVG file to use.` },
			hasDemo: false,
			isSpecial: false,
			name: 'path',
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
		{ ...toSlot }
	],
	slotList: []
};
