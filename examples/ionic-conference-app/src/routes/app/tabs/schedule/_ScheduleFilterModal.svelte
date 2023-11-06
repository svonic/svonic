<script lang="ts">
	import { browser } from '$app/environment';
	import {
		Button,
		Buttons,
		Checkbox,
		Content,
		Footer,
		getConfig,
		Header,
		Ionicon,
		Item,
		Label,
		List,
		ListHeader,
		Modal,
		Title,
		Toolbar
	} from '@svonic/core';
	import { onMount } from 'svelte';
	import './schedule-filter-modal.css';
	import { allTracks } from '$lib/stores/app.store';

	export let excludedTrackNames: string[] = [];

	let ios = false;
	let modal: Modal;
	let tracks: { name: string; icon?: string; isChecked: boolean }[] = [];

	if (browser) {
		onMount(async () => {
			ios = getConfig()?.get('mode') === 'ios';
		});
	}

	export const present = async () => {
		await modal.present();
	};

	const applyFilters = async () => {
		// Pass back a new array of track names to exclude
		excludedTrackNames = tracks.filter((c) => !c.isChecked).map((c) => c.name);
		await dismiss(excludedTrackNames);
	};

	const dismiss = async (data?: any) => {
		// can "dismiss" itself and pass back data
		await modal.dismiss(data);
	};

	const selectAll = (check: boolean) => {
		// set all to checked or unchecked
		tracks.forEach((track) => {
			track.isChecked = check;
		});
	};

	const getTracks = (currentTracks: string[]) => {
		currentTracks.forEach((track) => {
			tracks.push({
				name: track,
				isChecked: excludedTrackNames.indexOf(track) === -1
			});
		});
	};

	$: getTracks($allTracks);
</script>

<Modal
	class="schedule-filter-modal"
	swipeToClose="{true}"
	bind:this="{modal}"
>
	<Header translucent="{true}">
		<Toolbar>
			<Buttons slot="start">
				{#if ios}
					<Button on:click="{dismiss}">Cancel</Button>
				{:else}
					<Button on:click="{() => selectAll(false)}">Reset</Button>
				{/if}
			</Buttons>
			<Title>Filter Sessions</Title>

			<Button
				slot="end"
				on:click="{dismiss}">Done</Button
			>
		</Toolbar>
	</Header>

	<Content>
		<List lines="{ios ? 'inset' : 'full'}">
			<ListHeader>Tracks</ListHeader>

			{#each tracks as track}
				<Item track="{track.name.toLowerCase()}">
					{#if ios}
						<Ionicon
							color="medium"
							icon="{track.icon}"
							slot="start"
						/>
					{/if}
					<Label>{track.name}</Label>
					<Checkbox bind:checked="{track.isChecked}" />
				</Item>
			{/each}
		</List>
	</Content>

	{#if ios}
		<Footer translucent="{true}">
			<Toolbar>
				<Buttons>
					<Button
						slot="start"
						on:click="{() => selectAll(false)}">Deselect All</Button
					>
					<Button
						slot="end"
						on:click="{() => selectAll(true)}">Select All</Button
					>
				</Buttons>
			</Toolbar>
		</Footer>
	{/if}
</Modal>

<style>
</style>
