<script lang="ts">
	import { browser } from '$app/env';
	import type { Session } from '$lib/models/session';
	import { addTrackFilter, scheduleStore, sessionsStore } from '$lib/stores/app.store';
	import {
		Button,
		ButtonGroup,
		Content,
		DrawerButton,
		Fab,
		FabButton,
		FabButtonGroup,
		getConfig,
		Header,
		InputSearch,
		Ionicon,
		Item,
		ItemDivider,
		ItemGroup,
		ItemOption,
		ItemOptionGroup,
		ItemSliding,
		Label,
		List,
		ListHeader,
		Segment,
		SegmentButton,
		Title,
		Toolbar
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
	import './schedule.css';
	import ScheduleFilterModal from './_ScheduleFilterModal.svelte';

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
			<ButtonGroup toSlot="start">
				<DrawerButton />
			</ButtonGroup>
		{/if}
		{#if ios}
			<Segment bind:value="{segment}" on:svo:change="{updateSchedule}">
				<SegmentButton value="all">All</SegmentButton>
				<SegmentButton value="favorites">Favorites</SegmentButton>
			</Segment>
		{/if}
		{#if !ios && !showSearchbar}
			<Title>Schedule</Title>
		{/if}
		{#if showSearchbar}
			<InputSearch
				placeholder="Search"
				showCancelButton="always"
				bind:value="{queryText}"
				on:svo:change="{updateSchedule}"
				on:svo:cancel="{() => {
					showSearchbar = false;
				}}"
			/>
		{/if}
		<ButtonGroup toSlot="end">
			{#if !ios && !showSearchbar}
				<Button
					on:svo:click="{() => {
						showSearchbar = true;
					}}"
				>
					<Ionicon icon="{search}" toSlot="icon-only" />
				</Button>
				{#if !showSearchbar}
					<Button on:click="{presentFilter}">
						{#if ios}
							<span>Filter</span>
						{/if}
						{#if !ios}
							<Ionicon icon="{options}" toSlot="icon-only" />
						{/if}
					</Button>
					<ScheduleFilterModal bind:this="{scheduleFilterModal}" />
				{/if}
			{/if}
		</ButtonGroup>
	</Toolbar>
	{#if !ios}
		<Toolbar>
			<Segment bind:value="{segment}" on:svo:change="{updateSchedule}">
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
			<InputSearch placeholder="Search" bind:value="{queryText}" on:svo:change="{updateSchedule}" />
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
						<ItemSliding track="{session.tracks[0].toLowerCase()}" bind:this="{slidingItem}">
							<Item href="/app/tabs/schedule/session/{session.id}">
								<Label>
									<h3>{session.name}</h3>
									<p>
										{session.dateTimeStart} &mdash; {session.dateTimeEnd}: {session.location}
									</p>
								</Label>
							</Item>
							<ItemOptionGroup>
								{#if segment === 'all'}
									<ItemOption color="favorite" on:click="{() => addFavorite(slidingItem, session)}">
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
							</ItemOptionGroup>
						</ItemSliding>
					{/each}
				</ItemGroup>
			{/each}
		</List>
	{/if}

	{#if shownSessions === 0}
		<ListHeader>No Sessions Found</ListHeader>
	{/if}

	<Fab class="schedule-fab" horizontal="end" toSlot="fixed" vertical="bottom" bind:this="{fab}">
		<FabButton>
			<Ionicon icon="{shareSocial}" />
		</FabButton>
		<FabButtonGroup side="top">
			<FabButton color="vimeo" on:click="{() => openSocial('Vimeo', fab)}">
				<Ionicon icon="{logoVimeo}" />
			</FabButton>
			<FabButton color="instagram" on:click="{() => openSocial('Instagram', fab)}">
				<Ionicon icon="{logoInstagram}" />
			</FabButton>
			<FabButton color="twitter" on:click="{() => openSocial('Twitter', fab)}">
				<Ionicon icon="{logoTwitter}" />
			</FabButton>
			<FabButton color="facebook" on:click="{() => openSocial('Facebook', fab)}">
				<Ionicon icon="{logoFacebook}" />
			</FabButton>
		</FabButtonGroup>
	</Fab>
</Content>

<style>
</style>
