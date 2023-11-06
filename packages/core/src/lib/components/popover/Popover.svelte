<script lang="ts">
	import type { CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { OverlayEventDetail } from '@ionic/core/components';
	import type { IonPopover } from '@ionic/core/components/ion-popover';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	type AlignmentType = 'center' | 'end' | 'start' | undefined;
	type PopoverSizeType = 'auto' | 'cover' | undefined;
	type PositionSideType = 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top' | undefined;
	type ReferenceType = 'event' | 'trigger' | undefined;
	type TriggerActionType = 'click' | 'context-menu' | 'hover' | undefined;

	let component: IonPopover;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let alignment: AlignmentType = undefined;
	export let animated = true;
	export let arrow = true;
	export let backdropDismiss = true;
	export let dismissOnSelect = false;
	// export let enterAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	// export let event: any = undefined;
	// export let htmlAttributes: { [key: string]: any } | undefined = undefined;
	export let id: number | string | undefined = undefined;
	export let isOpen = false;
	export let keepContentsMounted = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	export let reference: ReferenceType = 'trigger';
	export let showBackdrop = true;
	export let side: PositionSideType = 'bottom';
	export let size: PopoverSizeType = 'auto';
	export let translucent = false;
	export let trigger: string | undefined = undefined;
	export let triggerAction: TriggerActionType = 'click';

	export const dismiss = async (
		data?: any,
		role?: string | undefined,
		dismissParentPopover?: boolean
	) => {
		if (BROWSER && component) {
			return await component.dismiss(data, role, dismissParentPopover);
		}
	};

	export const onDidDismiss = async () => {
		if (BROWSER && component) {
			return await component.onDidDismiss();
		}
	};

	export const onWillDismiss = async () => {
		if (BROWSER && component) {
			return await component.onDidDismiss();
		}
	};

	export const present = async (
		event?: MouseEvent | TouchEvent | PointerEvent | CustomEvent<any> | undefined
	) => {
		if (BROWSER && component) {
			return await component.present(event);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonPopover = (await import('@ionic/core/components/ion-popover')).IonPopover;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-popover', IonPopover);
		});
	}

	const dispatch = createEventDispatcher();

	const didDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('didDismiss', eventDetail);
	};

	const didPresent = () => {
		const eventDetail = true;

		dispatch('didPresent', eventDetail);
	};

	const willDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('willDismiss', eventDetail);
	};

	const willPresent = () => {
		const eventDetail = true;

		dispatch('willPresent', eventDetail);
	};
</script>

<ion-popover
	alignment="{alignment}"
	animated="{animated}"
	arrow="{arrow}"
	backdrop-dismiss="{backdropDismiss}"
	class="{cssClass}"
	dismiss-on-select="{dismissOnSelect}"
	id="{id}"
	is-open="{isOpen}"
	keep-contents-mounted="{keepContentsMounted}"
	keyboard-close="{keyboardClose}"
	mode="{mode}"
	reference="{reference}"
	show-backdrop="{showBackdrop}"
	side="{side}"
	size="{size}"
	translucent="{translucent}"
	trigger="{trigger}"
	trigger-action="{triggerAction}"
	bind:this="{component}"
	on:ionPopoverDidDismiss="{didDismiss}"
	on:ionPopoverDidPresent="{didPresent}"
	on:ionPopoverWillDismiss="{willDismiss}"
	on:ionPopoverWillPresent="{willPresent}"
>
	<slot />
</ion-popover>
