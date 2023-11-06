<script lang="ts">
	import {
		Accordion,
		AccordionGroup,
		ActionSheet,
		Alert,
		App,
		Button,
		Content,
		Header,
		Input,
		Item,
		Label,
		List,
		Picker,
		Title,
		Toolbar
	} from '$lib/components';
	import Loading from '$lib/components/loading/Loading.svelte';

	let actionSheetComponent: ActionSheet;
	let actionSheetIsOpen = false;
	let pickerComponent: Picker;
	let pickerIsOpen = false;

	const actionSheetButtons = [
		{
			text: 'Delete',
			role: 'destructive',
			data: {
				action: 'delete'
			}
		},
		{
			text: 'Share',
			data: {
				action: 'share'
			}
		},
		{
			text: 'Cancel',
			role: 'cancel',
			data: {
				action: 'cancel'
			}
		}
	];

	const alertButtons = [
		{
			text: 'Cancel',
			role: 'cancel',
			handler: () => {
				console.log('Alert canceled');
			}
		},
		{
			text: 'OK',
			role: 'confirm',
			handler: () => {
				console.log('Alert confirmed');
			}
		}
	];

	const pickerButtons = [
		{
			text: 'Cancel',
			role: 'cancel'
		},
		{
			text: 'Confirm',
			handler: (value: string) => {
				console.log(`You selected: ${value.languages.value}`);
			}
		}
	];

	const pickerColumns = [
		{
			name: 'languages',
			options: [
				{
					text: 'JavaScript',
					value: 'javascript'
				},
				{
					text: 'TypeScript',
					value: 'typescript'
				},
				{
					text: 'Rust',
					value: 'rust'
				},
				{
					text: 'C#',
					value: 'c#'
				}
			]
		}
	];

	function handleActionSheetDidDismissMethod() {
		console.log('action sheet dismissed method');
		actionSheetIsOpen = false;
	}

	function handlePickerDidDismissEvent() {
		console.log('picker dismissed event');
		pickerIsOpen = false;
	}

	function handlePickerDidDismissMethod() {
		console.log('picker dismissed method');
		pickerIsOpen = false;
	}

	async function openActionSheet() {
		// actionSheetIsOpen = true;
		actionSheetComponent.present();

		console.log('actionSheetIsOpen', actionSheetIsOpen);

		// const something = await actionSheetComponent.onDidDismiss();
		// console.log('action sheet onDidDismiss resolved with role and data', something);

		// const { data, role } = await actionSheetComponent.onDidDismiss();
		// console.log('action sheet onDidDismiss resolved with role and data', data, role);

		await actionSheetComponent.onDidDismiss().then((value) => {
			console.log('action sheet onDidDismiss resolved with role and data', value);
			handleActionSheetDidDismissMethod();
		});
	}

	async function openPicker() {
		pickerIsOpen = true;
		console.log('pickerIsOpen', pickerIsOpen);

		// const something = await pickerComponent.onDidDismiss();
		// console.log('onDidDismiss resolved with role and data', something);

		// const { data, role } = await pickerComponent.onDidDismiss();
		// console.log('onDidDismiss resolved with role and data', data, role);

		// await pickerComponent.onDidDismiss().then((value) => {
		// 	console.log('onDidDismiss resolved with role and data', value);
		// 	handlePickerDidDismissMethod();
		// });
	}
</script>

<App>
	<slot name="menu-start" />
	<div
		class="ion-page"
		id="main"
	>
		<Header translucent="{true}">
			<Toolbar color="primary">
				<div slot="start">
					<slot name="app-toolbar-start" />
				</div>
				<Title>
					<slot name="app-toolbar-title" />
				</Title>
				<div slot="end">
					<slot name="app-toolbar-end" />
				</div>
			</Toolbar>
		</Header>
		<Content fullscreen="{false}">
			<!-- <Accordion
				toggleIconSlot="end"
				value="1"
			>
				<Item slot="header">
					<Label class="pl-2">wei</Label>
				</Item>
				<List slot="content">
					<MenuToggle autoHide="{false}">
						<Item
							detail="{false}"
							svelteKitPrefetch="{true}"
						>
							<Label class="pl-4">man</Label>
						</Item>
					</MenuToggle>
				</List>
			</Accordion> -->
			<AccordionGroup>
				<Accordion value="first">
					<Item
						color="light"
						slot="header"
					>
						<Label>First Accordion</Label>
					</Item>
					<div
						class="padding"
						slot="content"
					>
						First Content
					</div>
				</Accordion>
				<!-- <Accordion value="second">
					<Item
						color="light"
						slot="header"
					>
						<Label>Second Accordion</Label>
					</Item>
					<div
						class="padding"
						slot="content"
					>
						Second Content
					</div>
				</Accordion> -->
				<!-- <Accordion value="third">
					<Item
						color="light"
						slot="header"
					>
						<Label>Third Accordion</Label>
					</Item>
					<div
						class="padding"
						slot="content"
					>
						Third Content
					</div>
				</Accordion> -->
			</AccordionGroup>
			<Button id="present-alert">Open Alert</Button>
			<Alert
				buttons="{alertButtons}"
				header="Alert!"
				trigger="present-alert"
				on:didDismiss="{() => console.log('alert dismissed event')}"
			></Alert>
			<Button on:click="{openPicker}">Open Picker</Button>
			<Picker
				buttons="{pickerButtons}"
				columns="{pickerColumns}"
				isOpen="{pickerIsOpen}"
				bind:this="{pickerComponent}"
				on:didDismiss="{handlePickerDidDismissEvent}"
			></Picker>
			<Button on:click="{openActionSheet}">Open Action Sheet</Button>
			<ActionSheet
				buttons="{actionSheetButtons}"
				header="Actions"
				isOpen="{actionSheetIsOpen}"
				bind:this="{actionSheetComponent}"
			></ActionSheet>
			<Button id="open-loading">Show Loading</Button>
			<Loading
				duration="{3000}"
				message="Dismissing after 3 seconds..."
				spinner="crescent"
				trigger="open-loading"
			></Loading>

			<List>
				<Item>
					<Input
						label="Default label"
						placeholder="Enter text"
					></Input>
				</Item>

				<Item>
					<Input
						label="Fixed label"
						labelPlacement="fixed"
						placeholder="Enter text"
					></Input>
				</Item>

				<Item>
					<Input
						fill="outline"
						label="Stacked label"
						labelPlacement="stacked"
						placeholder="Enter text"
					></Input>
				</Item>

				<Item>
					<Input
						label="Floating label"
						labelPlacement="floating"
						placeholder="Enter text"
					></Input>
				</Item>
			</List>
		</Content>
	</div>
</App>

<style>
	.padding {
		padding: 10px;
	}
</style>
