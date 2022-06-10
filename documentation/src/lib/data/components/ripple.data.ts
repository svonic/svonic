import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const RippleData: ComponentDataAPI = {
	description: {
		en: `The ripple effect component adds the Material Design ink ripple interaction effect. This component can only be used inside of an App component and can be added to any component.

	It's important to note that the parent should have relative positioning because the ripple effect is absolutely positioned and will cover the closest parent with relative positioning. The parent element should also be given the ion-activatable class, which tells the ripple effect that the element is clickable.

	The default type, "bounded", will expand the ripple effect from the click position outwards. To add a ripple effect that always starts in the center of the element and expands in a circle, add an "unbounded" type. It's recommended to add overflow: hidden to the parent element to avoid the ripple overflowing its container, especially with an unbounded ripple.

	`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/ripple-effect',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/ripple-effect'
	},
	keyboardNavigationList: [],
	label: 'Ripple',
	methodList: [
		{
			description: { en: `Adds the ripple effect to the parent element.` },
			name: 'addRipple',
			signature: `addRipple(x: number, y: number) => Promise<() => void>`
		}
	],
	name: 'ripple',
	propList: [
		{
			defaultValue: 'bounded',
			description: {
				en: `Sets the type of ripple-effect:

			Bounded: the ripple effect expands from the user's click position.

			Unbounded: the ripple effect expands from the center of the button and overflows the container.

			NOTE: Surfaces for bounded ripples should have the overflow property set to hidden, while surfaces for unbounded ripples should have it set to visible.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'type',
			valueList: [
				{
					type: 'string',
					value: 'bounded'
				},
				{
					type: 'string',
					value: 'unbounded'
				}
			]
		}
	],
	slotList: []
};
