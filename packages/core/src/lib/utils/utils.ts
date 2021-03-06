import type { SlotType } from '$lib/types/slot.type';
import type { MenuI, Platforms } from '@ionic/core/components';
import { getPlatforms as getPlatformsCore, isPlatform as isPlatformCore } from './platform';
// import { isPlatform as isPlatformCore } from '@ionic/core/components';

export const addNamedSlot = (element: HTMLElement, slot: SlotType | string) => {
	if (element && slot) {
		element.setAttribute('slot', slot);
	}
};

export const addSvelteKitPrefetchAttribute = async (element: HTMLElement) => {
	if (element) {
		await new Promise((resolve) => componentOnReady(element, resolve));

		element.shadowRoot.firstElementChild.setAttribute('sveltekit:prefetch', '');
	}
};

export const componentOnReady = (element: any, callback: any) => {
	if (element && element?.componentOnReady) {
		element.componentOnReady().then((resolvedElement: any) => callback(resolvedElement));
	} else {
		raf(() => callback(element));
	}
};

export const defineCustomElement = (tagName: string, customElement: any): void => {
	if (typeof customElements === 'undefined') return;

	if (!customElements.get(tagName)) {
		customElements.define(tagName, customElement);
	}
};

export const getIonicMenu = (menuId: string): MenuI => {
	const query = "ion-menu[menu-id='" + menuId + "']";
	return document.querySelector(query) as unknown as MenuI;
};

export const hostContext = (selector: string, el: HTMLElement): boolean => {
	return el.closest(selector).parentElement !== null;
};

export const getPlatforms = () => {
	return getPlatformsCore(window);
};

export const isPlatform = (platform: Platforms): boolean => {
	if (typeof (window as Window) !== 'undefined') {
		``;
		return isPlatformCore(window, platform);
	}
};

export const raf = (h: any): number | NodeJS.Timeout => {
	if (typeof requestAnimationFrame === 'function') {
		return requestAnimationFrame(h);
	}
	return setTimeout(h);
};
