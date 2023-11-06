import type { ComponentGroup } from '$lib/types/component-list.type';
import { AccordionGroupData } from './components/accordion-group.data';
import { AccordionData } from './components/accordion.data';
import { ActionSheetData } from './components/action-sheet.data';
import { AppData } from './components/app.data';
import { AvatarData } from './components/avatar.data';
import { BadgeData } from './components/badge.data';
import { BreadcrumbsData as BreadcrumbsData } from './components/breadcrumbs.data';
import { BreadcrumbData } from './components/breadcrumb.data';
import { ButtonData } from './components/button.data';
import { ButtonsData } from './components/buttons.data';
import { CardContentData } from './components/card-content.data';
import { CardHeaderData } from './components/card-header.data';
import { CardSubTitleData } from './components/card-subtitle.data';
import { CardTitleData } from './components/card-title.data';
import { CardData } from './components/card.data';
import { CheckboxData } from './components/checkbox.data';
import { ChipData } from './components/chip.data';
import { ColData } from './components/col.data';
import { ContentData } from './components/content.data';
import { DatetimeData } from './components/datetime.data';
import { FabButtonData } from './components/fab-button.data';
import { FabListData } from './components/fab-list.data';
import { FabData } from './components/fab.data';
import { FooterData } from './components/footer.data';
import { GridData } from './components/grid.data';
import { HeaderData } from './components/header.data';
import { IconData } from './components/icon.data';
import { ImgData } from './components/img.data';
import { InputData } from './components/input.data';
import { IoniconData } from './components/ionicon.data';
import { ItemDividerData } from './components/item-divider.data';
import { ItemGroupData } from './components/item-group.data';
import { ItemOptionData } from './components/item-option.data';
import { ItemOptionsData } from './components/item-options.data';
import { ItemReorderGroupData } from './components/item-reorder-group.data';
import { ItemReorderData } from './components/item-reorder.data';
import { ItemSlidingData } from './components/item-sliding.data';
import { ItemData } from './components/item.data';
import { LabelData } from './components/label.data';
import { ListHeaderData } from './components/list-header.data';
import { ListData } from './components/list.data';
import { MenuButtonData } from './components/menu-button.data';
import { MenuToggleData } from './components/menu-toggle.data';
import { MenuData } from './components/menu.data';
import { ModalData } from './components/modal.data';
import { NoteData } from './components/note.data';
import { PopoverData } from './components/popover.data';
import { ProgressBarData } from './components/progress-bar.data';
import { SpinnerData } from './components/spinner.data';
import { RadioGroupData } from './components/radio-group.data';
import { RadioData } from './components/radio.data';
import { RangeData } from './components/range.data';
import { RefresherContentData } from './components/refresher-content.data';
import { RefresherData } from './components/refresher.data';
import { RippleEffectData } from './components/ripple-effect.data';
import { RowData } from './components/row.data';
import { SearchbarData } from './components/searchbar.data';
import { SegmentButtonData } from './components/segment-button.data';
import { SegmentData } from './components/segment.data';
import { SelectOptionData } from './components/select-option.data';
import { SelectData } from './components/select.data';
import { SkeletonTextData } from './components/skeleton-text.data';
import { SplitPaneData } from './components/split-pane.data';
import { TabBarData } from './components/tab-bar.data';
import { TabButtonData } from './components/tab-button.data';
import { TabData } from './components/tab.data';
import { TabsData } from './components/tabs.data';
import { TextData } from './components/text.data';
import { TextareaData } from './components/textarea.data';
import { ThumbnailData } from './components/thumbnail.data';
import { TitleData } from './components/title.data';
import { ToastData } from './components/toast.data';
import { ToggleData } from './components/toggle.data';
import { ToolbarData } from './components/toolbar.data';

export const componentList: ComponentGroup[] = [
	{
		group: 'Buttons and Inputs',
		groupList: [
			{
				data: ButtonData,
				label: 'Button',
				name: 'button',
				route: '/components/button'
			},
			{
				data: CheckboxData,
				label: 'Checkbox',
				name: 'checkbox',
				route: '/components/checkbox'
			},
			{
				data: ChipData,
				label: 'Chip',
				name: 'chip',
				route: '/components/chip'
			},
			{
				data: DatetimeData,
				label: 'Date Picker',
				name: 'date-picker',
				route: '/components/date-picker'
			},
			{
				data: InputData,
				label: 'Input',
				name: 'input',
				route: '/components/input'
			},
			{
				data: SearchbarData,
				label: 'Searchbar',
				name: 'searchbar',
				route: '/components/searchbar'
			},
			{
				data: RadioData,
				label: 'Radio',
				name: 'radio',
				route: '/components/radio'
			},
			{
				data: RadioGroupData,
				label: 'Radio Group',
				name: 'radio-group',
				route: '/components/radio-group'
			},
			{
				data: RangeData,
				label: 'Range',
				name: 'range',
				route: '/components/range'
			},
			{
				data: RippleEffectData,
				label: 'Ripple Effect',
				name: 'ripple-effect',
				route: '/components/ripple-effect'
			},
			{
				data: SegmentData,
				label: 'Segment',
				name: 'segment',
				route: '/components/segment'
			},
			{
				data: SegmentButtonData,
				label: 'Segment Button',
				name: 'segment-button',
				route: '/components/segment-button'
			},
			{
				data: SelectData,
				label: 'Select',
				name: 'select',
				route: '/components/select'
			},
			{
				data: SelectOptionData,
				label: 'Select Option',
				name: 'select-option',
				route: '/components/select-option'
			},
			{
				data: TextareaData,
				label: 'Textarea',
				name: 'textarea',
				route: '/components/textarea'
			},
			{
				data: ToggleData,
				label: 'Toggle',
				name: 'toggle',
				route: '/components/toggle'
			}
		]
	},
	{
		group: 'Content and Layout',
		groupList: [
			{
				data: AppData,
				label: 'App',
				name: 'app',
				route: '/components/app'
			},
			{
				data: ColData,
				label: 'Col',
				name: 'col',
				route: '/components/col'
			},
			{
				data: ContentData,
				label: 'Content',
				name: 'content',
				route: '/components/content'
			},
			{
				data: GridData,
				label: 'Grid',
				name: 'grid',
				route: '/components/grid'
			},
			{
				data: RefresherData,
				label: 'Refresher',
				name: 'refresher',
				route: '/components/refresher'
			},
			{
				data: RefresherContentData,
				label: 'Refresher Content',
				name: 'refresher-content',
				route: '/components/refresher-content'
			},
			{
				data: RowData,
				label: 'Row',
				name: 'row',
				route: '/components/row'
			}
		]
	},
	{
		group: 'Data Display',
		groupList: [
			{
				data: AccordionData,
				label: 'Accordion',
				name: 'accordion',
				route: '/components/accordion'
			},
			{
				data: AccordionGroupData,
				label: 'Accordion Group',
				name: 'accordion-group',
				route: '/components/accordion-group'
			},
			{
				data: AvatarData,
				label: 'Avatar',
				name: 'avatar',
				route: '/components/avatar'
			},
			{
				data: BadgeData,
				label: 'Badge',
				name: 'badge',
				route: '/components/badge'
			},
			{
				data: CardData,
				label: 'Card',
				name: 'card',
				route: '/components/card'
			},
			{
				data: CardContentData,
				label: 'Card Content',
				name: 'card-content',
				route: '/components/card-content'
			},
			{
				data: CardHeaderData,
				label: 'Card Header',
				name: 'card-header',
				route: '/components/card-header'
			},
			{
				data: CardSubTitleData,
				label: 'Card Subtitle',
				name: 'card-subtitle',
				route: '/components/card-subtitle'
			},
			{
				data: CardTitleData,
				label: 'Card Title',
				name: 'card-title',
				route: '/components/card-title'
			},
			{
				data: IconData,
				label: 'Icon',
				name: 'icon',
				route: '/components/icon'
			},
			{
				data: IoniconData,
				label: 'Ionicon',
				name: 'ionicon',
				route: '/components/ionicon'
			},
			{
				data: ImgData,
				label: 'Image',
				name: 'image',
				route: '/components/image'
			},
			{
				data: ThumbnailData,
				label: 'Thumbnail',
				name: 'thumbnail',
				route: '/components/thumbnail'
			}
		]
	},
	{
		group: 'Floating Action',
		groupList: [
			{
				data: FabData,
				label: 'Fab',
				name: 'fab',
				route: '/components/fab'
			},
			{
				data: FabButtonData,
				label: 'Fab Button',
				name: 'fab-button',
				route: '/components/fab-button'
			},
			{
				data: FabListData,
				label: 'Fab List',
				name: 'fab-list',
				route: '/components/fab-list'
			}
		]
	},
	{
		group: 'List and Item',
		groupList: [
			{
				data: ItemData,
				label: 'Item',
				name: 'item',
				route: '/components/item'
			},
			{
				data: ItemDividerData,
				label: 'Item Divider',
				name: 'item-divider',
				route: '/components/item-divider'
			},
			{
				data: ItemGroupData,
				label: 'Item Group',
				name: 'item-group',
				route: '/components/item-group'
			},
			{
				data: ItemOptionData,
				label: 'Item Option',
				name: 'item-option',
				route: '/components/item-option'
			},
			{
				data: ItemOptionsData,
				label: 'Item Options',
				name: 'item-options',
				route: '/components/item-options'
			},
			{
				data: ItemReorderData,
				label: 'Item Reorder',
				name: 'item-reorder',
				route: '/components/item-reorder'
			},
			{
				data: ItemReorderGroupData,
				label: 'Item Reorder Group',
				name: 'item-reorder-group',
				route: '/components/item-reorder-group'
			},
			{
				data: ItemSlidingData,
				label: 'Item Sliding',
				name: 'item-sliding',
				route: '/components/item-sliding'
			},
			{
				data: LabelData,
				label: 'Label',
				name: 'label',
				route: '/components/label'
			},
			{
				data: ListData,
				label: 'List',
				name: 'list',
				route: '/components/list'
			},
			{
				data: ListHeaderData,
				label: 'List Header',
				name: 'list-header',
				route: '/components/list-header'
			},
			{
				data: NoteData,
				label: 'Note',
				name: 'note',
				route: '/components/note'
			}
		]
	},
	{
		group: 'Overlays',
		groupList: [
			{
				data: ActionSheetData,
				label: 'Action Sheet',
				name: 'action-sheet',
				route: '/components/action-sheet'
			},
			{
				data: MenuData,
				label: 'Menu',
				name: 'menu',
				route: '/components/menu'
			},
			{
				data: MenuButtonData,
				label: 'Menu Button',
				name: 'menu-button',
				route: '/components/menu-button'
			},
			{
				data: MenuToggleData,
				label: 'Menu Toggle',
				name: 'menu-toggle',
				route: '/components/menu-toggle'
			},
			{
				data: ModalData,
				label: 'Modal',
				name: 'modal',
				route: '/components/modal'
			},
			{
				data: PopoverData,
				label: 'Popover',
				name: 'popover',
				route: '/components/popover'
			},
			{
				data: ToastData,
				label: 'Toast',
				name: 'toast',
				route: '/components/toast'
			}
		]
	},
	{
		group: 'Navigation',
		groupList: [
			{
				data: BreadcrumbData,
				label: 'Breadcrumb',
				name: 'breadcrumb',
				route: '/components/breadcrumb'
			},
			{
				data: BreadcrumbsData,
				label: 'Breadcrumbs',
				name: 'breadcrumbs',
				route: '/components/breadcrumbs'
			},
			{
				data: SplitPaneData,
				label: 'Split Pane',
				name: 'split-pane',
				route: '/components/split-pane'
			},
			{
				data: TabData,
				label: 'Tab',
				name: 'tab',
				route: '/components/tab'
			},
			{
				data: TabBarData,
				label: 'Tab Bar',
				name: 'tab-bar',
				route: '/components/tab-bar'
			},
			{
				data: TabButtonData,
				label: 'Tab Button',
				name: 'tab-button',
				route: '/components/tab-button'
			},
			{
				data: TabsData,
				label: 'Tabs',
				name: 'tabs',
				route: '/components/tabs'
			}
		]
	},
	{
		group: 'Progress Indicators',
		groupList: [
			{
				data: ProgressBarData,
				label: 'Progress Bar',
				name: 'progress-bar',
				route: '/components/progress-bar'
			},
			{
				data: SkeletonTextData,
				label: 'Skeleton Text',
				name: 'skeleton-text',
				route: '/components/skeleton-text'
			},
			{
				data: SpinnerData,
				label: 'Spinner',
				name: 'spinner',
				route: '/components/spinner'
			}
		]
	},
	{
		group: 'Toolbar',
		groupList: [
			{
				data: ButtonsData,
				label: 'Buttons',
				name: 'buttons',
				route: '/components/buttons'
			},
			{
				data: FooterData,
				label: 'Footer',
				name: 'footer',
				route: '/components/footer'
			},
			{
				data: HeaderData,
				label: 'Header',
				name: 'header',
				route: '/components/header'
			},
			{
				data: TitleData,
				label: 'Title',
				name: 'title',
				route: '/components/title'
			},
			{
				data: ToolbarData,
				label: 'Toolbar',
				name: 'toolbar',
				route: '/components/toolbar'
			}
		]
	},
	{
		group: 'Typography',
		groupList: [
			{
				data: TextData,
				label: 'Text',
				name: 'text',
				route: '/components/text'
			}
		]
	}
];
