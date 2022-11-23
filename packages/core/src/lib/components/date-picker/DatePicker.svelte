<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { DatetimeChangeEventDetail, DatetimeCustomEvent } from '@ionic/core/components';
	import type { IonDatetime } from '@ionic/core/components/ion-datetime';
	import { createEventDispatcher, onMount } from 'svelte';

	type PresentationType =
		| 'date'
		| 'date-time'
		| 'month'
		| 'month-year'
		| 'time'
		| 'time-date'
		| 'year';

	type SizeType = 'cover' | 'fixed';

	let component: IonDatetime;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let cancelText: string | undefined = 'Cancel';
	export let clearText: string | undefined = 'Clear';
	export let color: ColorType = undefined;
	export let dayValues: number | number[] | string | undefined = undefined;
	export let disabled = false;
	export let doneText = 'Done';
	export let firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 0;
	export let hourCycle: 'h12' | 'h23' | undefined = undefined;
	export let hourValues: number | number[] | string | undefined = undefined;
	export let locale = 'default';
	export let max: string | undefined = undefined;
	export let min: string | undefined = undefined;
	export let minuteValues: number | number[] | string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let monthValues: number | number[] | string | undefined = undefined;
	export let name = '';
	export let presentation: PresentationType = 'date-time';
	export let readonly = false;
	export let showClearButton = false;
	export let showDefaultButtons = false;
	export let showDefaultTimeLabel = true;
	export let showDefaultTitle = false;
	export let size: SizeType = 'fixed';
	export let value: ValueType = '';
	export let yearValues: number | number[] | string | undefined = undefined;

	export const cancel = async (closeOverlay?: boolean) => {
		if (browser && component) {
			await component.cancel(closeOverlay);
		}
	};

	export const confirm = async (closeOverlay?: boolean) => {
		if (browser && component) {
			await component.confirm(closeOverlay);
		}
	};

	export const reset = async (startDate?: string | undefined) => {
		if (browser && component) {
			await component.reset(startDate);
		}
	};

	if (browser) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonButton = (await import('@ionic/core/components/ion-button')).IonButton;
			const IonButtons = (await import('@ionic/core/components/ion-buttons')).IonButtons;
			const IonDatetime = (await import('@ionic/core/components/ion-datetime')).IonDatetime;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonItem = (await import('@ionic/core/components/ion-item')).IonItem;
			const IonLabel = (await import('@ionic/core/components/ion-label')).IonLabel;
			const IonNote = (await import('@ionic/core/components/ion-note')).IonNote;
			const IonPickerColumnInternal = (
				await import('@ionic/core/components/ion-picker-column-internal')
			).IonPickerColumnInternal;
			const IonPickerInternal = (await import('@ionic/core/components/ion-picker-internal'))
				.IonPickerInternal;
			const IonPopover = (await import('@ionic/core/components/ion-popover')).IonPopover;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-button', IonButton);
			defineCustomElement('ion-buttons', IonButtons);
			defineCustomElement('ion-datetime', IonDatetime);
			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-item', IonItem);
			defineCustomElement('ion-label', IonLabel);
			defineCustomElement('ion-note', IonNote);
			defineCustomElement('ion-picker-column-internal', IonPickerColumnInternal);
			defineCustomElement('ion-picker-internal', IonPickerInternal);
			defineCustomElement('ion-popover', IonPopover);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('svo:blur', eventDetail);
	};

	const onIonCancel = () => {
		const eventDetail = true;

		dispatch('svo:cancel', eventDetail);
	};

	const onIonChange = (event: DatetimeCustomEvent) => {
		const eventDetail: DatetimeChangeEventDetail = event.detail;

		const newValue = event.detail.value;

		if (value !== newValue) {
			value = newValue;
		}

		dispatch('svo:change', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('svo:focus', eventDetail);
	};
</script>

<ion-datetime
	cancel-text="{cancelText}"
	clear-text="{clearText}"
	class="{cssClass}"
	color="{color}"
	day-values="{dayValues}"
	disabled="{disabled}"
	done-text="{doneText}"
	first-day-of-week="{firstDayOfWeek}"
	hour-cycle="{hourCycle}"
	hour-values="{hourValues}"
	locale="{locale}"
	max="{max}"
	min="{min}"
	minute-values="{minuteValues}"
	mode="{mode}"
	month-values="{monthValues}"
	name="{name}"
	presentation="{presentation}"
	readonly="{readonly}"
	show-clear-button="{showClearButton}"
	show-default-buttons="{showDefaultButtons}"
	show-default-time-label="{showDefaultTimeLabel}"
	show-default-title="{showDefaultTitle}"
	size="{size}"
	value="{value}"
	year-values="{yearValues}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionCancel="{onIonCancel}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
>
	<slot
		name="buttons"
		slot="buttons"
	/>
	<slot
		name="time-label"
		slot="time-label"
	/>
	<slot
		name="title"
		slot="title"
	/>
</ion-datetime>

<style>
</style>
