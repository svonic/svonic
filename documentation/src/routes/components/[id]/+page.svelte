<script lang="ts">
	import AccordionGroupDemo from '$lib/demo/accordion-group/AccordionGroupDemo.svelte';
	import AccordionDemo from '$lib/demo/accordion/AccordionDemo.svelte';
	import ActionSheetDemo from '$lib/demo/action-sheet/ActionSheetDemo.svelte';
	import AppDemo from '$lib/demo/app/AppDemo.svelte';
	import AvatarDemo from '$lib/demo/avatar/AvatarDemo.svelte';
	import BadgeDemo from '$lib/demo/badge/BadgeDemo.svelte';
	import BreadcrumbDemo from '$lib/demo/breadcrumb/BreadcrumbDemo.svelte';
	import BreadcrumbsDemo from '$lib/demo/breadcrumbs/BreadcrumbsDemo.svelte';
	import ButtonDemo from '$lib/demo/button/ButtonDemo.svelte';
	import ButtonsDemo from '$lib/demo/buttons/ButtonsDemo.svelte';
	import CardContentDemo from '$lib/demo/card-content/CardContentDemo.svelte';
	import CardHeaderDemo from '$lib/demo/card-header/CardHeaderDemo.svelte';
	import CardSubtitleDemo from '$lib/demo/card-subtitle/CardSubtitleDemo.svelte';
	import CardDemo from '$lib/demo/card/CardDemo.svelte';
	import CheckboxDemo from '$lib/demo/checkbox/CheckboxDemo.svelte';
	import ChipDemo from '$lib/demo/chip/ChipDemo.svelte';
	import ColDemo from '$lib/demo/col/ColDemo.svelte';
	import ContentDemo from '$lib/demo/content/ContentDemo.svelte';
	import DatetimeDemo from '$lib/demo/datetime/DatetimeDemo.svelte';
	import FabButtonDemo from '$lib/demo/fab-button/FabButtonDemo.svelte';
	import FabListDemo from '$lib/demo/fab-list/FabListDemo.svelte';
	import FabDemo from '$lib/demo/fab/FabDemo.svelte';
	import FooterDemo from '$lib/demo/footer/FooterDemo.svelte';
	import GridDemo from '$lib/demo/grid/GridDemo.svelte';
	import HeaderDemo from '$lib/demo/header/HeaderDemo.svelte';
	import IconDemo from '$lib/demo/icon/IconDemo.svelte';
	import ImgDemo from '$lib/demo/img/ImgDemo.svelte';
	import InputDemo from '$lib/demo/input/InputDemo.svelte';
	import IoniconDemo from '$lib/demo/ionicon/IoniconDemo.svelte';
	import ItemDividerDemo from '$lib/demo/item-divider/ItemDividerDemo.svelte';
	import ItemGroupDemo from '$lib/demo/item-group/ItemGroupDemo.svelte';
	import ItemOptionDemo from '$lib/demo/item-option/ItemOptionDemo.svelte';
	import ItemOptionsDemo from '$lib/demo/item-options/ItemOptionsDemo.svelte';
	import ItemReorderGroupDemo from '$lib/demo/item-reorder-group/ItemReorderGroupDemo.svelte';
	import ItemReorderDemo from '$lib/demo/item-reorder/ItemReorderDemo.svelte';
	import ItemSlidingDemo from '$lib/demo/item-sliding/ItemSlidingDemo.svelte';
	import ItemDemo from '$lib/demo/item/ItemDemo.svelte';
	import LabelDemo from '$lib/demo/label/LabelDemo.svelte';
	import ListHeaderDemo from '$lib/demo/list-header/ListHeaderDemo.svelte';
	import ListDemo from '$lib/demo/list/ListDemo.svelte';
	import MenuButtonDemo from '$lib/demo/menu-button/MenuButtonDemo.svelte';
	import MenuToggleDemo from '$lib/demo/menu-toggle/MenuToggleDemo.svelte';
	import MenuDemo from '$lib/demo/menu/MenuDemo.svelte';
	import ModalDemo from '$lib/demo/modal/ModalDemo.svelte';
	import NoteDemo from '$lib/demo/note/NoteDemo.svelte';
	import PopoverDemo from '$lib/demo/popover/PopoverDemo.svelte';
	import ProgressBarDemo from '$lib/demo/progress-bar/ProgressBarDemo.svelte';
	import RadioGroupDemo from '$lib/demo/radio-group/RadioGroupDemo.svelte';
	import RadioDemo from '$lib/demo/radio/RadioDemo.svelte';
	import RangeDemo from '$lib/demo/range/RangeDemo.svelte';
	import RefresherContentDemo from '$lib/demo/refresher-content/RefresherContentDemo.svelte';
	import RefresherDemo from '$lib/demo/refresher/RefresherDemo.svelte';
	import RippleEffectDemo from '$lib/demo/ripple-effect/RippleEffectDemo.svelte';
	import RowDemo from '$lib/demo/row/RowDemo.svelte';
	import SearchbarDemo from '$lib/demo/searchbar/SearchbarDemo.svelte';
	import SegmentButtonDemo from '$lib/demo/segment-button/SegmentButtonDemo.svelte';
	import SegmentDemo from '$lib/demo/segment/SegmentDemo.svelte';
	import SelectOptionDemo from '$lib/demo/select-option/SelectOptionDemo.svelte';
	import SelectDemo from '$lib/demo/select/SelectDemo.svelte';
	import SkeletonTextDemo from '$lib/demo/skeleton-text/SkeletonTextDemo.svelte';
	import SpinnerDemo from '$lib/demo/spinner/SpinnerDemo.svelte';
	import SplitPaneDemo from '$lib/demo/split-pane/SplitPaneDemo.svelte';
	import TabBarDemo from '$lib/demo/tab-bar/TabBarDemo.svelte';
	import TabButtonDemo from '$lib/demo/tab-button/TabButtonDemo.svelte';
	import TabDemo from '$lib/demo/tab/TabDemo.svelte';
	import TabsDemo from '$lib/demo/tabs/TabsDemo.svelte';
	import TextDemo from '$lib/demo/text/TextDemo.svelte';
	import TextareaDemo from '$lib/demo/textarea/TextareaDemo.svelte';
	import ThumbnailDemo from '$lib/demo/thumbnail/ThumbnailDemo.svelte';
	import TitleDemo from '$lib/demo/title/TitleDemo.svelte';
	import ToastDemo from '$lib/demo/toast/ToastDemo.svelte';
	import ToggleDemo from '$lib/demo/toggle/ToggleDemo.svelte';
	import ToolbarDemo from '$lib/demo/toolbar/ToolbarDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import type { PageData } from './$types';

	export let data: PageData;

	export let componentData: ComponentData;

	$: componentData = data.body.componentData;

	const demoComponentList = [
		{ name: 'accordion', component: AccordionDemo },
		{ name: 'accordion-group', component: AccordionGroupDemo },
		{ name: 'action-sheet', component: ActionSheetDemo },
		{ name: 'app', component: AppDemo },
		{ name: 'avatar', component: AvatarDemo },
		{ name: 'badge', component: BadgeDemo },
		{ name: 'breadcrumb', component: BreadcrumbDemo },
		{ name: 'breadcrumbs', component: BreadcrumbsDemo },
		{ name: 'button', component: ButtonDemo },
		{ name: 'buttons', component: ButtonsDemo },
		{ name: 'card', component: CardDemo },
		{ name: 'card-content', component: CardContentDemo },
		{ name: 'card-header', component: CardHeaderDemo },
		{ name: 'card-subtitle', component: CardSubtitleDemo },
		{ name: 'card-title', component: CardSubtitleDemo },
		{ name: 'checkbox', component: CheckboxDemo },
		{ name: 'chip', component: ChipDemo },
		{ name: 'col', component: ColDemo },
		{ name: 'content', component: ContentDemo },
		{ name: 'datetime', component: DatetimeDemo },
		{ name: 'fab', component: FabDemo },
		{ name: 'fab-button', component: FabButtonDemo },
		{ name: 'fab-list', component: FabListDemo },
		{ name: 'footer', component: FooterDemo },
		{ name: 'grid', component: GridDemo },
		{ name: 'header', component: HeaderDemo },
		{ name: 'icon', component: IconDemo },
		{ name: 'img', component: ImgDemo },
		{ name: 'input', component: InputDemo },
		{ name: 'ionicon', component: IoniconDemo },
		{ name: 'item', component: ItemDemo },
		{ name: 'item-divider', component: ItemDividerDemo },
		{ name: 'item-group', component: ItemGroupDemo },
		{ name: 'item-option', component: ItemOptionDemo },
		{ name: 'item-options', component: ItemOptionsDemo },
		{ name: 'item-reorder', component: ItemReorderDemo },
		{ name: 'item-reorder-group', component: ItemReorderGroupDemo },
		{ name: 'item-sliding', component: ItemSlidingDemo },
		{ name: 'label', component: LabelDemo },
		{ name: 'list', component: ListDemo },
		{ name: 'list-header', component: ListHeaderDemo },
		{ name: 'menu', component: MenuDemo },
		{ name: 'menu-button', component: MenuButtonDemo },
		{ name: 'menu-toggle', component: MenuToggleDemo },
		{ name: 'modal', component: ModalDemo },
		{ name: 'note', component: NoteDemo },
		{ name: 'popover', component: PopoverDemo },
		{ name: 'progress-bar', component: ProgressBarDemo },
		{ name: 'radio', component: RadioDemo },
		{ name: 'radio-group', component: RadioGroupDemo },
		{ name: 'range', component: RangeDemo },
		{ name: 'refresher', component: RefresherDemo },
		{ name: 'refresher-content', component: RefresherContentDemo },
		{ name: 'ripple-effect', component: RippleEffectDemo },
		{ name: 'row', component: RowDemo },
		{ name: 'searchbar', component: SearchbarDemo },
		{ name: 'segment', component: SegmentDemo },
		{ name: 'segment-button', component: SegmentButtonDemo },
		{ name: 'select', component: SelectDemo },
		{ name: 'select-option', component: SelectOptionDemo },
		{ name: 'skeleton-text', component: SkeletonTextDemo },
		{ name: 'spinner', component: SpinnerDemo },
		{ name: 'split-pane', component: SplitPaneDemo },
		{ name: 'tab', component: TabDemo },
		{ name: 'tab-bar', component: TabBarDemo },
		{ name: 'tab-button', component: TabButtonDemo },
		{ name: 'tabs', component: TabsDemo },
		{ name: 'text', component: TextDemo },
		{ name: 'textarea', component: TextareaDemo },
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
