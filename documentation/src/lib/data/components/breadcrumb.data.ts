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
import { defaultSlot } from '$lib/data/slots/default.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const BreadcrumbData: ComponentDataAPI = {
	description: {
		en: `A Breadcrumb is a single navigation item that is a child of the Breadcrumbs component. A breadcrumb can link elsewhere in an app or it can be plain text. Each breadcrumb has a separator between it and the next breadcrumb and can optionally contain an icon.`
	},
	dispatchedEventList: [{ ...blur }, { ...focus }],
	forwardedEventList: [{ ...click }],
	label: 'Breadcrumb',
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/breadcrumb',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/breadcrumb'
	},
	keyboardNavigationList: [],
	methodList: [],
	name: 'breadcrumb',
	propList: [
		{
			defaultValue: 'false',
			description: {
				en: `If true, the breadcrumb will take on a different look to show that it is the currently active breadcrumb. Defaults to true for the last breadcrumb if it is not set on any.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'active',
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
		{ ...color },
		{ ...disabled },
		{ ...download },
		{ ...href },
		{ ...mode },
		{ ...rel },
		{ ...routerDirection },
		{
			defaultValue: 'undefined',
			description: {
				en: `	If true, show a separator between this breadcrumb and the next. Defaults to true for all breadcrumbs except the last.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'separator',
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
		{ ...target }
	],
	slotList: [
		{ ...defaultSlot },
		{ ...end },
		{
			description: {
				en: `Content placed in the Separator slot will be displayed between the breadcrumb and the next breadcrumb.`
			},
			name: 'separator'
		},
		{ ...start }
	]
};
