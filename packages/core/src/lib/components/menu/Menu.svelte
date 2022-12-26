<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { OverlayEventDetail } from '@ionic/core/components';
	import type { IonPopover } from '@ionic/core/components/ion-popover';
	import { createEventDispatcher, onMount } from 'svelte';

	type AlignmentType = 'center' | 'end' | 'start' | undefined;
	type MenuSideType = 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top' | undefined;
	type MenuSizeType = 'auto' | 'cover' | undefined;
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
	export let id: string | undefined = undefined;
	export let isOpen = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	export let reference: 'event' | 'trigger' = 'trigger';
	export let showBackdrop = true;
	export let side: MenuSideType = 'bottom';
	export let size: MenuSizeType = 'auto';
	export let translucent = false;
	export let trigger: string | undefined = undefined;
	export let triggerAction: TriggerActionType = 'click';

	export const dismiss = async (
		data?: any,
		role?: string | undefined,
		dismissParentMenu?: boolean
	) => {
		if (component && browser) {
			return await component.dismiss(data, role, dismissParentMenu);
		}
	};

	export const onDidDismiss = async () => {
		if (component && browser) {
			return await component.onDidDismiss();
		}
	};

	export const onWillDismiss = async () => {
		if (component && browser) {
			return await component.onDidDismiss();
		}
	};

	export const present = async (
		event?: MouseEvent | TouchEvent | PointerEvent | CustomEvent<any> | undefined
	) => {
		if (component && browser) {
			return await component.present(event);
		}
	};

	if (browser) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonPopover = (await import('@ionic/core/components/ion-popover')).IonPopover;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-popover', IonPopover);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonPopoverDidDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		isOpen = false;

		dispatch('svo:did-dismiss', eventDetail);
	};

	const onIonPopoverDidPresent = () => {
		const eventDetail = true;

		dispatch('svo:did-present', eventDetail);
	};

	const onIonPopoverWillDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:will-dismiss', eventDetail);
	};

	const onIonPopoverWillPresent = () => {
		const eventDetail = true;

		dispatch('svo:will-present', eventDetail);
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
	on:ionPopoverDidDismiss="{onIonPopoverDidDismiss}"
	on:ionPopoverDidPresent="{onIonPopoverDidPresent}"
	on:ionPopoverWillDismiss="{onIonPopoverWillDismiss}"
	on:ionPopoverWillPresent="{onIonPopoverWillPresent}"
>
	<slot />
</ion-popover>
