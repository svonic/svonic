<script lang="ts">
	import { browser } from '$app/environment';
	import type { Session } from '$lib/models/session';
	import { addTrackFilter, scheduleStore, sessionsStore } from '$lib/stores/app.store';
	import {
		Button,
		Buttons,
		Content,
		Fab,
		FabButton,
		FabList,
		Header,
		Searchbar,
		Ionicon,
		Item,
		ItemDivider,
		ItemGroup,
		ItemOption,
		ItemOptions,
		ItemSliding,
		Label,
		List,
		ListHeader,
		MenuButton,
		Segment,
		SegmentButton,
		Title,
		Toolbar,
		getConfig
	} from '@svonic/core';
	import {
		logoFacebook,
		logoInstagram,
		logoTwitter,
		logoVimeo,
		options,
		search,
		shareSocial
	} from 'ionicons/icons/index.js';
	import { onMount } from 'svelte';
	import ScheduleFilterModal from './_ScheduleFilterModal.svelte';
	import './schedule.css';

	let dayIndex = 0;
	let fab: Fab;
	let ios = false;
	let queryText = '';
	let segment: 'all' | 'favorites' = 'all';
	let scheduleList: List;
	let scheduleFilterModal: ScheduleFilterModal;
	let slidingItem: ItemSliding;
	let shownSessions: any = [];
	let showSearchbar = false;

	export let data;
	export let sessions: Session[];

	if (browser) {
		onMount(async () => {
			ios = getConfig()?.get('mode') === 'ios';
		});
	}

	const addFavorite = (slidingItem: ItemSliding, sessionData: any) => {};

	const openSocial = async (network: string, fab: Fab) => {
		// const loading = await this.loadingCtrl.create({
		// 	message: `Posting to ${network}`,
		// 	duration: Math.random() * 1000 + 500
		// });
		// await loading.present();
		// await loading.onWillDismiss();
		fab.close();
	};

	const presentFilter = async () => {
		await scheduleFilterModal.present();
	};

	const removeFavorite = (slidingItem: ItemSliding, sessionData: any, title: string) => {};

	const updateSchedule = () => {
		if (scheduleList) {
			scheduleList.closeSlidingItems();
		}
	};

	$: loadSessionStore(sessions);

	$: {
		// console.log('schdeduleStore', $scheduleStore);
		shownSessions = $scheduleStore.groups.length;
	}

	// $: console.log('ios', ios);

	$: {
		// console.log('allTracks', $allTracks);
		// console.log('appState', $state);
	}

	$: {
		// console.log('allFiltered', $allFiltered);
	}

	const loadSessionStore = (sessions: Session[]) => {
		sessionsStore.set(sessions);
		addTrackFilter('Ionic');

		// console.log('sessions', $sessionsStore);
	};
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<Header translucent="{true}">
	<Toolbar>
		{#if !showSearchbar}
			<Buttons slot="start">
				<MenuButton />
			</Buttons>
		{/if}
		{#if ios}
			<Segment
				bind:value="{segment}"
				on:ionChange="{updateSchedule}"
			>
				<SegmentButton value="all">All</SegmentButton>
				<SegmentButton value="favorites">Favorites</SegmentButton>
			</Segment>
		{/if}
		{#if !ios && !showSearchbar}
			<Title>Schedule</Title>
		{/if}
		{#if showSearchbar}
			<Searchbar
				placeholder="Search"
				showCancelButton="always"
				bind:value="{queryText}"
				on:ionChange="{updateSchedule}"
				on:ionCancel="{() => {
					showSearchbar = false;
				}}"
			/>
		{/if}
		<Buttons slot="end">
			{#if !ios && !showSearchbar}
				<Button
					on:click="{() => {
						showSearchbar = true;
					}}"
				>
					<Ionicon
						icon="{search}"
						slot="icon-only"
					/>
				</Button>
				{#if !showSearchbar}
					<Button on:click="{presentFilter}">
						{#if ios}
							<span>Filter</span>
						{/if}
						{#if !ios}
							<Ionicon
								icon="{options}"
								slot="icon-only"
							/>
						{/if}
					</Button>
					<ScheduleFilterModal bind:this="{scheduleFilterModal}" />
				{/if}
			{/if}
		</Buttons>
	</Toolbar>
	{#if !ios}
		<Toolbar>
			<Segment
				bind:value="{segment}"
				on:ionChange="{updateSchedule}"
			>
				<SegmentButton value="all">All</SegmentButton>
				<SegmentButton value="favorites">Favorites</SegmentButton>
			</Segment>
		</Toolbar>
	{/if}
</Header>

<Content fullscreen="{true}">
	<Header collapse="condense">
		<Toolbar>
			<Title size="large">Schedule</Title>
		</Toolbar>
		<Toolbar>
			<Searchbar
				placeholder="Search"
				bind:value="{queryText}"
				on:ionChange="{updateSchedule}"
			/>
		</Toolbar>
	</Header>

	{#if shownSessions > 0}
		<List bind:this="{scheduleList}">
			{#each $scheduleStore.groups as group}
				<ItemGroup>
					<ItemDivider sticky="{true}">
						<Label>{group.startTime}</Label>
					</ItemDivider>

					{#each group.sessions as session}
						<ItemSliding
							track="{session.tracks[0].toLowerCase()}"
							bind:this="{slidingItem}"
						>
							<Item href="/app/tabs/schedule/session/{session.id}">
								<Label>
									<h3>{session.name}</h3>
									<p>
										{session.dateTimeStart} &mdash; {session.dateTimeEnd}: {session.location}
									</p>
								</Label>
							</Item>
							<ItemOptions>
								{#if segment === 'all'}
									<ItemOption
										color="favorite"
										on:click="{() => addFavorite(slidingItem, session)}"
									>
										Favorite
									</ItemOption>
								{/if}
								{#if segment === 'favorites'}
									<ItemOption
										color="danger"
										on:click="{() => removeFavorite(slidingItem, session, 'Remove Favorite')}"
										>Remove
									</ItemOption>
								{/if}
							</ItemOptions>
						</ItemSliding>
					{/each}
				</ItemGroup>
			{/each}
		</List>
	{/if}

	{#if shownSessions === 0}
		<ListHeader>No Sessions Found</ListHeader>
	{/if}

	<Fab
		class="schedule-fab"
		horizontal="end"
		slot="fixed"
		vertical="bottom"
		bind:this="{fab}"
	>
		<FabButton>
			<Ionicon icon="{shareSocial}" />
		</FabButton>
		<FabList side="top">
			<FabButton
				color="vimeo"
				on:click="{() => openSocial('Vimeo', fab)}"
			>
				<Ionicon icon="{logoVimeo}" />
			</FabButton>
			<FabButton
				color="instagram"
				on:click="{() => openSocial('Instagram', fab)}"
			>
				<Ionicon icon="{logoInstagram}" />
			</FabButton>
			<FabButton
				color="twitter"
				on:click="{() => openSocial('Twitter', fab)}"
			>
				<Ionicon icon="{logoTwitter}" />
			</FabButton>
			<FabButton
				color="facebook"
				on:click="{() => openSocial('Facebook', fab)}"
			>
				<Ionicon icon="{logoFacebook}" />
			</FabButton>
		</FabList>
	</Fab>
</Content>

<style>
</style>
