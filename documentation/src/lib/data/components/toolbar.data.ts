import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { defaultSlot } from '$lib/data/slots/default.data';
import { end } from '$lib/data/slots/end.data';
import { start } from '$lib/data/slots/start.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ToolbarData: ComponentDataAPI = {
	description: {
		en: `Toolbars are positioned above or below content. When a toolbar is placed in a Header it will appear fixed at the top of the content, and when it is in a Footer it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a Header or Footer component. When placed within an Content component, toolbars will scroll with the content.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/toolbar',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/toolbar'
	},
	keyboardNavigationList: [],
	label: 'Toolbar',
	methodList: [],
	name: 'toolbar',
	propList: [{ ...color, hasDemo: true }, { ...mode }],
	slotList: [
		{ ...defaultSlot },
		{ ...end },
		{
			description: {
				en: `Content is placed to the right of the toolbar text in ios mode, and to the far right in md mode.`
			},
			name: 'primary'
		},
		{
			description: {
				en: `Content is placed to the left of the toolbar text in ios mode, and directly to the right in md mode.`
			},
			name: 'secondary'
		},
		{ ...start }
	]
};
