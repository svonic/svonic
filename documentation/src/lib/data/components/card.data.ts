import { click } from '$lib/data/events/click.data';
import { button } from '$lib/data/props/button.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { download } from '$lib/data/props/download.data';
import { href } from '$lib/data/props/href.data';
import { mode } from '$lib/data/props/mode.data';
import { rel } from '$lib/data/props/rel.data';
import { routerDirection } from '$lib/data/props/router-direction.data';
import { svelteKitPrefetch } from '$lib/data/props/sveltekit-prefetch.data';
import { target } from '$lib/data/props/target.data';
import { type } from '$lib/data/props/type-button.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const CardData: ComponentDataAPI = {
	description: {
		en: `Cards are a standard piece of UI that serves as an entry point to more detailed information. A card can be a single component, but is often made up of some header, title, subtitle, and content. Card is broken up into several sub-components to reflect this.`
	},
	dispatchedEventList: [],
	forwardedEventList: [{ ...click }],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/card',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/card'
	},
	keyboardNavigationList: [],
	label: 'Card',
	methodList: [],
	name: 'card',
	propList: [
		{ ...button },
		{ ...color },
		{ ...disabled },
		{ ...download },
		{ ...href },
		{ ...mode },
		{ ...rel },
		{ ...routerDirection },
		{ ...svelteKitPrefetch },
		{ ...target },
		{
			...type,
			description: {
				en: `The type of the button. Only used when an onclick or button property is present.`
			}
		}
	],
	slotList: []
};
