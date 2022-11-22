<script lang="ts">
	import AccordionGroupDemo from '$lib/demo/accordion-group/AccordionGroupDemo.svelte';
	import AccordionDemo from '$lib/demo/accordion/AccordionDemo.svelte';
	import ActionSheetDemo from '$lib/demo/action-sheet/ActionSheetDemo.svelte';
	import ApplicationDemo from '$lib/demo/application/ApplicationDemo.svelte';
	import AvatarDemo from '$lib/demo/avatar/AvatarDemo.svelte';
	import BadgeDemo from '$lib/demo/badge/BadgeDemo.svelte';
	import BreadcrumbGroupDemo from '$lib/demo/breadcrumb-group/BreadcrumbGroupDemo.svelte';
	import BreadcrumbDemo from '$lib/demo/breadcrumb/BreadcrumbDemo.svelte';
	import ButtonGroupDemo from '$lib/demo/button-group/ButtonGroupDemo.svelte';
	import ButtonDemo from '$lib/demo/button/ButtonDemo.svelte';
	import CardContentDemo from '$lib/demo/card-content/CardContentDemo.svelte';
	import CardHeaderDemo from '$lib/demo/card-header/CardHeaderDemo.svelte';
	import CardSubtitleDemo from '$lib/demo/card-subtitle/CardSubtitleDemo.svelte';
	import CardDemo from '$lib/demo/card/CardDemo.svelte';
	import CheckboxDemo from '$lib/demo/checkbox/CheckboxDemo.svelte';
	import ChipDemo from '$lib/demo/chip/ChipDemo.svelte';
	import ColDemo from '$lib/demo/col/ColDemo.svelte';
	import ContentDemo from '$lib/demo/content/ContentDemo.svelte';
	import DatePickerDemo from '$lib/demo/date-picker/DatePickerDemo.svelte';
	import DrawerButtonDemo from '$lib/demo/drawer-button/DrawerButtonDemo.svelte';
	import DrawerToggleDemo from '$lib/demo/drawer-toggle/DrawerToggleDemo.svelte';
	import DrawerDemo from '$lib/demo/drawer/DrawerDemo.svelte';
	import FabButtonGroupDemo from '$lib/demo/fab-button-group/FabButtonGroupDemo.svelte';
	import FabButtonDemo from '$lib/demo/fab-button/FabButtonDemo.svelte';
	import FabDemo from '$lib/demo/fab/FabDemo.svelte';
	import FooterDemo from '$lib/demo/footer/FooterDemo.svelte';
	import GridDemo from '$lib/demo/grid/GridDemo.svelte';
	import HeaderDemo from '$lib/demo/header/HeaderDemo.svelte';
	import IconDemo from '$lib/demo/icon/IconDemo.svelte';
	import ImageDemo from '$lib/demo/image/ImageDemo.svelte';
	import InputSearchDemo from '$lib/demo/input-search/InputSearchDemo.svelte';
	import InputTextareaDemo from '$lib/demo/input-textarea/InputTextareaDemo.svelte';
	import InputDemo from '$lib/demo/input/InputDemo.svelte';
	import IoniconDemo from '$lib/demo/ionicon/IoniconDemo.svelte';
	import ItemDividerDemo from '$lib/demo/item-divider/ItemDividerDemo.svelte';
	import ItemGroupDemo from '$lib/demo/item-group/ItemGroupDemo.svelte';
	import ItemOptionGroupDemo from '$lib/demo/item-option-group/ItemOptionGroupDemo.svelte';
	import ItemOptionDemo from '$lib/demo/item-option/ItemOptionDemo.svelte';
	import ItemReorderGroupDemo from '$lib/demo/item-reorder-group/ItemReorderGroupDemo.svelte';
	import ItemReorderDemo from '$lib/demo/item-reorder/ItemReorderDemo.svelte';
	import ItemSlidingDemo from '$lib/demo/item-sliding/ItemSlidingDemo.svelte';
	import ItemDemo from '$lib/demo/item/ItemDemo.svelte';
	import LabelDemo from '$lib/demo/label/LabelDemo.svelte';
	import ListHeaderDemo from '$lib/demo/list-header/ListHeaderDemo.svelte';
	import ListDemo from '$lib/demo/list/ListDemo.svelte';
	import MenuDemo from '$lib/demo/menu/MenuDemo.svelte';
	import ModalDemo from '$lib/demo/modal/ModalDemo.svelte';
	import NavigationPaneDemo from '$lib/demo/navigation-pane/NavigationPaneDemo.svelte';
	import NavigationTabBarDemo from '$lib/demo/navigation-tab-bar/NavigationTabBarDemo.svelte';
	import NavigationTabButtonDemo from '$lib/demo/navigation-tab-button/NavigationTabButtonDemo.svelte';
	import NavigationTabGroupDemo from '$lib/demo/navigation-tab-group/NavigationTabGroupDemo.svelte';
	import NavigationTabDemo from '$lib/demo/navigation-tab/NavigationTabDemo.svelte';
	import NoteDemo from '$lib/demo/note/NoteDemo.svelte';
	import ProgressBarDemo from '$lib/demo/progress-bar/ProgressBarDemo.svelte';
	import ProgressSkeletonDemo from '$lib/demo/progress-skeleton/ProgressSkeletonDemo.svelte';
	import ProgressSpinnerDemo from '$lib/demo/progress-spinner/ProgressSpinnerDemo.svelte';
	import RadioGroupDemo from '$lib/demo/radio-group/RadioGroupDemo.svelte';
	import RadioDemo from '$lib/demo/radio/RadioDemo.svelte';
	import RangeSliderDemo from '$lib/demo/range-slider/RangeSliderDemo.svelte';
	import RefresherContentDemo from '$lib/demo/refresher-content/RefresherContentDemo.svelte';
	import RefresherDemo from '$lib/demo/refresher/RefresherDemo.svelte';
	import RippleDemo from '$lib/demo/ripple/RippleDemo.svelte';
	import RowDemo from '$lib/demo/row/RowDemo.svelte';
	import SegmentButtonDemo from '$lib/demo/segment-button/SegmentButtonDemo.svelte';
	import SegmentDemo from '$lib/demo/segment/SegmentDemo.svelte';
	import SelectOptionDemo from '$lib/demo/select-option/SelectOptionDemo.svelte';
	import SelectDemo from '$lib/demo/select/SelectDemo.svelte';
	import TextDemo from '$lib/demo/text/TextDemo.svelte';
	import ThumbnailDemo from '$lib/demo/thumbnail/ThumbnailDemo.svelte';
	import TitleDemo from '$lib/demo/title/TitleDemo.svelte';
	import ToastDemo from '$lib/demo/toast/ToastDemo.svelte';
	import ToggleDemo from '$lib/demo/toggle/ToggleDemo.svelte';
	import ToolbarDemo from '$lib/demo/toolbar/ToolbarDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import type { PageData } from './$types';

	export let data: PageData;

	export let componentData: ComponentData;

	$ : componentData = data.body.componentData;

	const demoComponentList = [
		{ name: 'accordion', component: AccordionDemo },
		{ name: 'accordion-group', component: AccordionGroupDemo },
		{ name: 'action-sheet', component: ActionSheetDemo },
		{ name: 'application', component: ApplicationDemo },
		{ name: 'avatar', component: AvatarDemo },
		{ name: 'badge', component: BadgeDemo },
		{ name: 'breadcrumb', component: BreadcrumbDemo },
		{ name: 'breadcrumb-group', component: BreadcrumbGroupDemo },
		{ name: 'button', component: ButtonDemo },
		{ name: 'button-group', component: ButtonGroupDemo },
		{ name: 'card', component: CardDemo },
		{ name: 'card-content', component: CardContentDemo },
		{ name: 'card-header', component: CardHeaderDemo },
		{ name: 'card-subtitle', component: CardSubtitleDemo },
		{ name: 'card-title', component: CardSubtitleDemo },
		{ name: 'checkbox', component: CheckboxDemo },
		{ name: 'chip', component: ChipDemo },
		{ name: 'col', component: ColDemo },
		{ name: 'content', component: ContentDemo },
		{ name: 'date-picker', component: DatePickerDemo },
		{ name: 'drawer', component: DrawerDemo },
		{ name: 'drawer-button', component: DrawerButtonDemo },
		{ name: 'drawer-toggle', component: DrawerToggleDemo },
		{ name: 'fab', component: FabDemo },
		{ name: 'fab-button', component: FabButtonDemo },
		{ name: 'fab-button-group', component: FabButtonGroupDemo },
		{ name: 'footer', component: FooterDemo },
		{ name: 'grid', component: GridDemo },
		{ name: 'header', component: HeaderDemo },
		{ name: 'icon', component: IconDemo },
		{ name: 'image', component: ImageDemo },
		{ name: 'input', component: InputDemo },
		{ name: 'input-search', component: InputSearchDemo },
		{ name: 'input-textarea', component: InputTextareaDemo },
		{ name: 'ionicon', component: IoniconDemo },
		{ name: 'item', component: ItemDemo },
		{ name: 'item-divider', component: ItemDividerDemo },
		{ name: 'item-group', component: ItemGroupDemo },
		{ name: 'item-option', component: ItemOptionDemo },
		{ name: 'item-option-group', component: ItemOptionGroupDemo },
		{ name: 'item-reorder', component: ItemReorderDemo },
		{ name: 'item-reorder-group', component: ItemReorderGroupDemo },
		{ name: 'item-sliding', component: ItemSlidingDemo },
		{ name: 'label', component: LabelDemo },
		{ name: 'list', component: ListDemo },
		{ name: 'list-header', component: ListHeaderDemo },
		{ name: 'menu', component: MenuDemo },
		{ name: 'modal', component: ModalDemo },
		{ name: 'navigation-pane', component: NavigationPaneDemo },
		{ name: 'navigation-tab', component: NavigationTabDemo },
		{ name: 'navigation-tab-bar', component: NavigationTabBarDemo },
		{ name: 'navigation-tab-button', component: NavigationTabButtonDemo },
		{ name: 'navigation-tab-group', component: NavigationTabGroupDemo },
		{ name: 'note', component: NoteDemo },
		{ name: 'progress-bar', component: ProgressBarDemo },
		{ name: 'progress-skeleton', component: ProgressSkeletonDemo },
		{ name: 'progress-spinner', component: ProgressSpinnerDemo },
		{ name: 'radio', component: RadioDemo },
		{ name: 'radio-group', component: RadioGroupDemo },
		{ name: 'range-slider', component: RangeSliderDemo },
		{ name: 'refresher', component: RefresherDemo },
		{ name: 'refresher-content', component: RefresherContentDemo },
		{ name: 'ripple', component: RippleDemo },
		{ name: 'row', component: RowDemo },
		{ name: 'segment', component: SegmentDemo },
		{ name: 'segment-button', component: SegmentButtonDemo },
		{ name: 'select', component: SelectDemo },
		{ name: 'select-option', component: SelectOptionDemo },
		{ name: 'text', component: TextDemo },
		{ name: 'thumbnail', component: ThumbnailDemo },
		{ name: 'title', component: TitleDemo },
		{ name: 'toast', component: ToastDemo },
		{ name: 'toggle', component: ToggleDemo },
		{ name: 'toolbar', component: ToolbarDemo }
	];

	const getDemoComponent = (propName: string) => {
		if (propName) {
			const element = demoComponentList.find((prop) => prop.name === propName);
			return element.component;
		}
		return null;
	};
</script>

{#if componentData}
	<svelte:component
		this="{getDemoComponent(componentData?.name)}"
		componentData="{componentData}"
	/>
{/if}

<style>
</style>
