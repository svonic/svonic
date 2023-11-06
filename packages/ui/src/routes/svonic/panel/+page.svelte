<script lang="ts">
	import Dialog from '$lib/components/dialog/Dialog.svelte';
	import DialogAction from '$lib/components/dialog/DialogAction.svelte';
	import DialogClose from '$lib/components/dialog/DialogClose.svelte';
	import DialogContent from '$lib/components/dialog/DialogContent.svelte';
	import DialogFooter from '$lib/components/dialog/DialogFooter.svelte';
	import DialogHeader from '$lib/components/dialog/DialogHeader.svelte';
	import DialogTitle from '$lib/components/dialog/DialogTitle.svelte';
	import { Avatar, Checkbox, Img, Item, Label, List } from '@svonic/core';

	let cssClass = 'svo-modal';
	let isOpen = false;
	let value = 'modal';

	const checkBoxChange = (event: { detail: { value: any; checked: boolean; }; }) => {
		if (event.detail.value) {
			isOpen = event.detail.checked;
			console.log(JSON.stringify(event.detail, null, 2));
		}
	};
</script>

<Checkbox
	bind:checked="{isOpen}"
	bind:value="{value}"
	on:ionChange="{checkBoxChange}"
/>
<p>Is Open: {isOpen}</p>
<p>Value is: {value}</p>

<Dialog
	class="{cssClass}"
	isOpen="{isOpen}"
>
	<DialogHeader>
		<DialogTitle>Right Panel</DialogTitle>
		<svelte:fragment slot="end">
			<DialogClose on:click={() => isOpen = false}>Close</DialogClose>
		</svelte:fragment>
	</DialogHeader>
	<DialogContent>
		<List>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Gollum</h2>
					<p>Sneaky little hobbitses!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Frodo</h2>
					<p>Go back, Sam! I'm going to Mordor alone!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Samwise</h2>
					<p>What we need is a few good taters.</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Gollum</h2>
					<p>Sneaky little hobbitses!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Frodo</h2>
					<p>Go back, Sam! I'm going to Mordor alone!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Samwise</h2>
					<p>What we need is a few good taters.</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Gollum</h2>
					<p>Sneaky little hobbitses!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Frodo</h2>
					<p>Go back, Sam! I'm going to Mordor alone!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Samwise</h2>
					<p>What we need is a few good taters.</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Gollum</h2>
					<p>Sneaky little hobbitses!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Frodo</h2>
					<p>Go back, Sam! I'm going to Mordor alone!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Samwise</h2>
					<p>What we need is a few good taters.</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Gollum</h2>
					<p>Sneaky little hobbitses!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Frodo</h2>
					<p>Go back, Sam! I'm going to Mordor alone!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Samwise</h2>
					<p>What we need is a few good taters.</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/1?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Gollum</h2>
					<p>Sneaky little hobbitses!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/2?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Frodo</h2>
					<p>Go back, Sam! I'm going to Mordor alone!</p>
				</Label>
			</Item>
			<Item>
				<Avatar slot="start">
					<Img src="https://www.gravatar.com/avatar/3?d=monsterid&f=y" />
				</Avatar>
				<Label>
					<h2>Samwise</h2>
					<p>What we need is a few good taters.</p>
				</Label>
			</Item>
		</List>
	</DialogContent>
	<DialogFooter>
		<svelte:fragment slot="end">
			<DialogAction>
				<DialogClose>Cancel</DialogClose>
				<DialogClose>Save</DialogClose>
			</DialogAction>
		</svelte:fragment>
	</DialogFooter>
</Dialog>
