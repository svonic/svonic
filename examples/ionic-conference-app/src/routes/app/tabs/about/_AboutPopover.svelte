<script lang="ts">
	import { goto } from '$app/navigation';
	import { Content, Item, Label, List, Popover } from '@svonic/core';

	let popover: Popover;

	export let id: string = '';

	const close = async (url: string) => {
		if (url === 'support') {
			await goto('/support');
		} else {
			window.open(url, '_blank');
			await popover.dismiss();
		}
	};
</script>

<Popover
	dismissOnSelect="{true}"
	id="{id}"
	trigger="more-info-button"
	triggerAction="click"
	bind:this="{popover}"
>
	<Content>
		<List lines="none">
			<Item
				button="{true}"
				on:click="{() => close('https://ionicframework.com/getting-started')}"
			>
				<Label>Learn Ionic</Label>
			</Item>
			<Item
				button="{true}"
				on:click="{() => close('https://ionicframework.com/docs/')}"
			>
				<Label>Documentation</Label>
			</Item>
			<Item
				button="{true}"
				on:click="{() => close('https://showcase.ionicframework.com')}"
			>
				<Label>Showcase</Label>
			</Item>
			<Item
				button="{true}"
				on:click="{() => close('https://github.com/ionic-team/ionic')}"
			>
				<Label>GitHub Repo</Label>
			</Item>
			<Item
				button="{true}"
				on:click="{() => close('support')}"
			>
				<Label>Support</Label>
			</Item>
		</List>
	</Content>
</Popover>

<style>
</style>
