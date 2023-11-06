<script lang="ts">
	import type { CssClassType, ColorType, FillType, InterfaceType, LabelPlacementInputType, ModeType, ShapeType, ValueType } from '$lib/types';
	import type { JustifyType } from '$lib/types/justify.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		ActionSheetOptions,
		AlertOptions,
		PopoverOptions,
		SelectChangeEventDetail,
		SelectCustomEvent
	} from '@ionic/core/components';
	import type { IonSelect } from '@ionic/core/components/ion-select';
	import { BROWSER } from 'esm-env';
	import { caretDownSharp, chevronExpand } from 'ionicons/icons';
	import { createEventDispatcher, onMount } from 'svelte';

	type InterfaceOptionsType = ActionSheetOptions | AlertOptions | PopoverOptions | undefined;

	let component: IonSelect;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let cancelText: string | undefined = 'Cancel';
	export let color: ColorType = undefined;
	export let compareWith:
		| ((currentValue: any, compareValue: any) => boolean)
		| null
		| string
		| undefined = undefined;
	export let disabled = false;
	export let fill: FillType = undefined;
	export let interfaceOptions: InterfaceOptionsType = undefined;
	export let interfaceType: InterfaceType = 'alert';
	export let justify: JustifyType = 'space-between';
	export let label: string | undefined = undefined;
	export let labelPlacement: LabelPlacementInputType = 'start';
	export let mode: ModeType = undefined;
	export let multiple = false;
	export let name = '';
	export let okText: string | undefined = 'OK';
	export let placeholder: string | undefined = undefined;
	export let selectedText: null | string | undefined = undefined;
	export let shape: ShapeType = undefined;
	export let value: ValueType = '';

	export let expandedIcon: string | undefined = mode === 'ios' ? chevronExpand : caretDownSharp;
	export let toggleIcon: string | undefined = mode === 'ios' ? chevronExpand : caretDownSharp;

	export const open = async (event?: UIEvent | undefined) => {
		if (BROWSER && component) {
			return await component.open(event);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonActionSheet = (await import('@ionic/core/components/ion-action-sheet'))
				.IonActionSheet;
			const IonAlert = (await import('@ionic/core/components/ion-alert')).IonAlert;
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonCheckbox = (await import('@ionic/core/components/ion-checkbox')).IonCheckbox;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonItem = (await import('@ionic/core/components/ion-item')).IonItem;
			const IonLabel = (await import('@ionic/core/components/ion-label')).IonLabel;
			const IonList = (await import('@ionic/core/components/ion-list')).IonList;
			const IonListHeader = (await import('@ionic/core/components/ion-list-header')).IonListHeader;
			const IonNote = (await import('@ionic/core/components/ion-note')).IonNote;
			const IonPopover = (await import('@ionic/core/components/ion-popover')).IonPopover;
			const IonRadio = (await import('@ionic/core/components/ion-radio')).IonRadio;
			const IonRadioGroup = (await import('@ionic/core/components/ion-radio-group')).IonRadioGroup;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;
			const IonSelect = (await import('@ionic/core/components/ion-select')).IonSelect;
			const IonSelectPopover = (await import('@ionic/core/components/ion-select-popover'))
				.IonSelectPopover;

			defineCustomElement('ion-action-sheet', IonActionSheet);
			defineCustomElement('ion-alert', IonAlert);
			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-checkbox', IonCheckbox);
			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-item', IonItem);
			defineCustomElement('ion-label', IonLabel);
			defineCustomElement('ion-list', IonList);
			defineCustomElement('ion-list-header', IonListHeader);
			defineCustomElement('ion-note', IonNote);
			defineCustomElement('ion-popover', IonPopover);
			defineCustomElement('ion-radio', IonRadio);
			defineCustomElement('ion-radio-group', IonRadioGroup);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
			defineCustomElement('ion-select', IonSelect);
			defineCustomElement('ion-select-popover', IonSelectPopover);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('ionBlur', eventDetail);
	};

	const onIonCancel = () => {
		const eventDetail = true;

		dispatch('ionCancel', eventDetail);
	};

	const onIonChange = (event: SelectCustomEvent) => {
		const eventDetail: SelectChangeEventDetail = event.detail;

		const newValue = event.detail.value;

		if (value !== newValue) {
			value = newValue;
		}

		dispatch('ionChange', eventDetail);
	};

	const onIonDismiss = () => {
		const eventDetail = true;

		dispatch('ionDismiss', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('ionFocus', eventDetail);
	};
</script>

<ion-select
	cancel-text="{cancelText}"
	class="{cssClass}"
	color="{color}"
	compare-with="{compareWith}"
	disabled="{disabled}"
	expanded-icon="{expandedIcon}"
	fill="{fill}"
	interface="{interfaceType}"
	interface-options="{interfaceOptions}"
	justify="{justify}"
	label="{label}"
	label-placement="{labelPlacement}"
	mode="{mode}"
	multiple="{multiple}"
	name="{name}"
	ok-text="{okText}"
	placeholder="{placeholder}"
	selected-text="{selectedText}"
	shape="{shape}"
	toggle-icon="{toggleIcon}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionCancel="{onIonCancel}"
	on:ionChange="{onIonChange}"
	on:ionDismiss="{onIonDismiss}"
	on:ionFocus="{onIonFocus}"
>
	<slot
		name="label"
		slot="label"
	/>
	<slot />
</ion-select>

<style>
</style>
