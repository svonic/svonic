import type { ComponentGroup } from '$lib/types/component-list.type';
import { AccordionGroupData } from './components/accordion-group.data';
import { AccordionData } from './components/accordion.data';
import { ActionSheetData } from './components/action-sheet.data';
import { ApplicationData } from './components/application.data';
import { AvatarData } from './components/avatar.data';
import { BadgeData } from './components/badge.data';
import { BreadcrumbGroupData } from './components/breadcrumb-group.data';
import { BreadcrumbData } from './components/breadcrumb.data';
import { ButtonGroupData } from './components/button-group.data';
import { ButtonData } from './components/button.data';
import { CardContentData } from './components/card-content.data';
import { CardHeaderData } from './components/card-header.data';
import { CardSubTitleData } from './components/card-subtitle.data';
import { CardTitleData } from './components/card-title.data';
import { CardData } from './components/card.data';
import { CheckboxData } from './components/checkbox.data';
import { ChipData } from './components/chip.data';
import { ColData } from './components/col.data';
import { ContentData } from './components/content.data';
import { DatePickerData } from './components/date-picker.data';
import { DrawerButtonData } from './components/drawer-button.data';
import { DrawerToggleData } from './components/drawer-toggle.data';
import { DrawerData } from './components/drawer.data';
import { FabButtonGroupData } from './components/fab-button-group.data';
import { FabButtonData } from './components/fab-button.data';
import { FabData } from './components/fab.data';
import { FooterData } from './components/footer.data';
import { GridData } from './components/grid.data';
import { HeaderData } from './components/header.data';
import { IconData } from './components/icon.data';
import { ImageData } from './components/image.data';
import { InputSearchData } from './components/input-search.data';
import { InputTextareaData } from './components/input-textarea.data';
import { InputData } from './components/input.data';
import { IoniconData } from './components/ionicon.data';
import { ItemDividerData } from './components/item-divider.data';
import { ItemGroupData } from './components/item-group.data';
import { ItemOptionGroupData } from './components/item-option-group.data';
import { ItemOptionData } from './components/item-option.data';
import { ItemReorderGroupData } from './components/item-reorder-group.data';
import { ItemReorderData } from './components/item-reorder.data';
import { ItemSlidingData } from './components/item-sliding.data';
import { ItemData } from './components/item.data';
import { LabelData } from './components/label.data';
import { ListHeaderData } from './components/list-header.data';
import { ListData } from './components/list.data';
import { MenuData } from './components/menu.data';
import { ModalData } from './components/modal.data';
import { NavigationPaneData } from './components/navigation-pane.data';
import { NavigationTabBarData } from './components/navigation-tab-bar.data';
import { NavigationTabButtonData } from './components/navigation-tab-button.data';
import { NavigationTabGroupData } from './components/navigation-tab-group.data';
import { NavigationTabData } from './components/navigation-tab.data';
import { NoteData } from './components/note.data';
import { ProgressBarData } from './components/progress-bar.data';
import { ProgressSkeletonData } from './components/progress-skeleton.data';
import { ProgressSpinnerData } from './components/progress-spinner.data';
import { RadioGroupData } from './components/radio-group.data';
import { RadioData } from './components/radio.data';
import { RangeSliderData } from './components/range-slider.data';
import { RefresherContentData } from './components/refresher-content.data';
import { RefresherData } from './components/refresher.data';
import { RippleData } from './components/ripple.data';
import { RowData } from './components/row.data';
import { SegmentButtonData } from './components/segment-button.data';
import { SegmentData } from './components/segment.data';
import { SelectOptionData } from './components/select-option.data';
import { SelectData } from './components/select.data';
import { TextData } from './components/text.data';
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
				data: DatePickerData,
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
				data: InputSearchData,
				label: 'Input Search',
				name: 'input-search',
				route: '/components/input-search'
			},
			{
				data: InputTextareaData,
				label: 'Input Textarea',
				name: 'input-textarea',
				route: '/components/input-textarea'
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
				data: RangeSliderData,
				label: 'Range Slider',
				name: 'range-slider',
				route: '/components/range-slider'
			},
			{
				data: RippleData,
				label: 'Ripple',
				name: 'ripple',
				route: '/components/ripple'
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
				data: ApplicationData,
				label: 'Application',
				name: 'application',
				route: '/components/application'
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
				data: ImageData,
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
				data: FabButtonGroupData,
				label: 'Fab Button Group',
				name: 'fab-button-group',
				route: '/components/fab-button-group'
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
				data: ItemOptionGroupData,
				label: 'Item Option Group',
				name: 'item-option-group',
				route: '/components/item-option-group'
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
				data: DrawerData,
				label: 'Drawer',
				name: 'drawer',
				route: '/components/drawer'
			},
			{
				data: DrawerButtonData,
				label: 'Drawer Button',
				name: 'drawer-button',
				route: '/components/drawer-button'
			},
			{
				data: DrawerToggleData,
				label: 'Drawer Toggle',
				name: 'drawer-toggle',
				route: '/components/drawer-toggle'
			},
			{
				data: MenuData,
				label: 'Menu',
				name: 'menu',
				route: '/components/menu'
			},
			{
				data: ModalData,
				label: 'Modal',
				name: 'modal',
				route: '/components/modal'
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
				data: BreadcrumbGroupData,
				label: 'Breadcrumb Group',
				name: 'breadcrumb-group',
				route: '/components/breadcrumb-group'
			},
			{
				data: NavigationPaneData,
				label: 'Navigation Pane',
				name: 'navigation-pane',
				route: '/components/navigation-pane'
			},
			{
				data: NavigationTabData,
				label: 'Navigation Tab',
				name: 'navigation-tab',
				route: '/components/navigation-tab'
			},
			{
				data: NavigationTabBarData,
				label: 'Navigation Tab Bar',
				name: 'navigation-tab-bar',
				route: '/components/navigation-tab-bar'
			},
			{
				data: NavigationTabButtonData,
				label: 'Navigation Tab Button',
				name: 'navigation-tab-button',
				route: '/components/navigation-tab-button'
			},
			{
				data: NavigationTabGroupData,
				label: 'Navigation Tab Group',
				name: 'navigation-tab-group',
				route: '/components/navigation-tab-group'
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
				data: ProgressSkeletonData,
				label: 'Progress Skeleton',
				name: 'progress-skeleton',
				route: '/components/progress-skeleton'
			},
			{
				data: ProgressSpinnerData,
				label: 'Progress Spinner',
				name: 'progress-spinner',
				route: '/components/progress-spinner'
			}
		]
	},
	{
		group: 'Toolbar',
		groupList: [
			{
				data: ButtonGroupData,
				label: 'Button Group',
				name: 'button-group',
				route: '/components/button-group'
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
