import { blur } from '$lib/data/events/blur.data';
import { click } from '$lib/data/events/click.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { download } from '$lib/data/props/download.data';
import { href } from '$lib/data/props/href.data';
import { mode } from '$lib/data/props/mode.data';
import { rel } from '$lib/data/props/rel.data';
import { routerDirection } from '$lib/data/props/router-direction.data';
import { target } from '$lib/data/props/target.data';
import { slot } from '$lib/data/props/to-slot.data';
import { translucent } from '$lib/data/props/translucent.data';
import { type } from '$lib/data/props/type-button.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const FabButtonData: ComponentDataAPI = {
	description: {
		en: `Floating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions. As the name suggests, FABs generally float over the content in a fixed position. This is not achieved exclusively by using an <FabButton>FAB</FabButton>. They need to be wrapped with an <Fab> component in order to be fixed over the content.

	If the FAB button is not wrapped with <ion-fab>, it will scroll with the content. FAB buttons have a default size, a mini size and can accept different colors:`
	},
	dispatchedEventList: [{ ...blur }, { ...focus }],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/fab-button',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/fab-button'
	},
	keyboardNavigationList: [],
	label: 'Fab Button',
	methodList: [],
	name: 'fab-button',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the fab button will be show a close icon.` },
			hasDemo: false,
			isSpecial: false,
			name: 'activated',
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
			defaultValue: 'close',
			description: {
				en: `The icon name to use for the close icon. This will appear when the fab button
			is pressed. Only applies if it is the main button inside of a fab containing a fab list.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'closeIcon',
			valueList: [
				{
					type: 'string',
					value: 'close'
				},
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{ ...color },
		{ ...disabled },
		{ ...download },
		{ ...href },
		{ ...mode },
		{ ...rel },
		{ ...routerDirection },
		{
			defaultValue: 'false',
			description: { en: `If true, the fab button will show when in a fab-button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'show',
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
			description: {
				en: `The size of the button. Set this to small in order to have a mini fab button.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'size',
			valueList: [
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
		{ ...target },
		{ ...slot },
		{ ...translucent },
		{ ...type }
	],
	slotList: []
};
