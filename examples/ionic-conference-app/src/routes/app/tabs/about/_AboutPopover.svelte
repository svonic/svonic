<script lang="ts">
	import { goto } from '$app/navigation';
	import { Content, Item, Label, List, Menu } from '@svonic/core';

	let menu: Menu;

	export let id: string | undefined = undefined;

	const close = async (url: string) => {
		if (url === 'support') {
			await goto('/support');
		} else {
			window.open(url, '_blank');
			await menu.dismiss();
		}
	};
</script>

<Menu
	dismissOnSelect="{true}"
	id="{id}"
	trigger="more-info-button"
	triggerAction="click"
	bind:this="{menu}"
>
	<Content>
		<List lines="none">
			<Item button="{true}" on:click="{() => close('https://ionicframework.com/getting-started')}">
				<Label>Learn Ionic</Label>
			</Item>
			<Item button="{true}" on:click="{() => close('https://ionicframework.com/docs/')}">
				<Label>Documentation</Label>
			</Item>
			<Item button="{true}" on:click="{() => close('https://showcase.ionicframework.com')}">
				<Label>Showcase</Label>
			</Item>
			<Item button="{true}" on:click="{() => close('https://github.com/ionic-team/ionic')}">
				<Label>GitHub Repo</Label>
			</Item>
			<Item button="{true}" on:click="{() => close('support')}">
				<Label>Support</Label>
			</Item>
		</List>
	</Content>
</Menu>

<style>
</style>
