<script lang="ts">
	import { browser } from '$app/env';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SideType } from '$lib/types/side.type';
	import type { ValueType } from '$lib/types/value.type';
	import { componentOnReady, defineCustomElement } from '$lib/utils/utils';
	import type { IonAccordion } from '@ionic/core/components/ion-accordion';
	import type { IonItem } from '@ionic/core/components/ion-item';
	import type { IonIcon } from 'ionicons/components/ion-icon';
	import { chevronDown } from 'ionicons/icons/index.js';
	import { onMount } from 'svelte';

	let component: IonAccordion;
	let componentIsReady = false;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let mode: ModeType = undefined;
	export let readonly = false;
	export let toggleIcon = 'chevronDown';
	export let toggleIconSlot: SideType = 'end';
	export let value: ValueType = undefined;

	const getSlottedHeaderIonItem = () => {
		const headerEl = component.shadowRoot.getElementById('header');

		if (!headerEl) {
			return;
		}

		// console.log('headerEl', headerEl);

		/**
		 * Get the first ion-item
		 * slotted in the header slot
		 */
		const slot = headerEl.querySelector('slot');

		// console.log('slot', slot);

		if (!slot) {
			return;
		}

		// This is not defined in unit tests
		const ionItem =
			slot.assignedElements &&
			(slot.assignedElements().find((el) => el.tagName === 'ION-ITEM') as IonItem | undefined);

		// console.log('slot.assignedElements', slot.assignedElements());

		return ionItem;
	};

	const getSlottedIonIcon = (itemEl: IonItem) => {
		if (!itemEl) {
			return;
		}

		const buttonEl = itemEl.shadowRoot.querySelector('button');

		// console.log('buttonEl', buttonEl);

		if (!buttonEl) {
			return;
		}

		const divItemInner = buttonEl.querySelector('div');

		// console.log('divItemInner', divItemInner);

		const slot: HTMLSlotElement = divItemInner.querySelector("[name='end']");

		// console.log('divItemInner slot', slot);

		// This is not defined in unit tests
		const ionIcon =
			slot.assignedElements &&
			(slot.assignedElements().find((el) => el.tagName === 'ION-ICON') as IonIcon | undefined);

		// console.log('slot.assignedElements', slot.assignedElements());

		return ionIcon;
	};

	const updateMissingIcon = () => {
		const ionItem = getSlottedHeaderIonItem();

		if (!ionItem) {
			return;
		}

		const iconEl = getSlottedIonIcon(ionItem);

		if (!iconEl) {
			return;
		}

		if (!iconEl.src) {
			iconEl.src = chevronDown;
		}
	};

	if (browser) {
		onMount(async () => {
			const IonAccordion = (await import('@ionic/core/components/ion-accordion')).IonAccordion;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonItem = (await import('@ionic/core/components/ion-item')).IonItem;
			const IonList = (await import('@ionic/core/components/ion-list')).IonList;
			const IonNote = (await import('@ionic/core/components/ion-note')).IonNote;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-accordion', IonAccordion);
			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-item', IonItem);
			defineCustomElement('ion-list', IonList);
			defineCustomElement('ion-note', IonNote);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			await new Promise((resolve) => componentOnReady(component, resolve));

			if (component) {
				updateMissingIcon();

				componentIsReady = true;
			}
		});
	}
</script>

<ion-accordion
	class="{cssClass}"
	disabled="{disabled}"
	mode="{mode}"
	readonly="{readonly}"
	toggle-icon="{toggleIcon}"
	toggle-icon-slot="{toggleIconSlot}"
	value="{value}"
	bind:this="{component}"
>
	<slot name="header" />
	<slot />
	<slot name="content" />
</ion-accordion>

<style>
</style>
