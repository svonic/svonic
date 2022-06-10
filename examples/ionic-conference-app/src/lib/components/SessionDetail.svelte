<script lang="ts">
	import BackButton from '$lib/components/BackButton.svelte';
	import type { Session } from '$lib/models/session';
	import {
		Button,
		ButtonGroup,
		Content,
		Header,
		Ionicon,
		Item,
		Label,
		List,
		Text,
		Toolbar
	} from '@svonic/core';
	import { cloudDownload, share, star, starOutline } from 'ionicons/icons/index.js';

	export let defaultHref = '';
	export let session: Session;

	let isFavorite = false;

	const sessionClick = (item: string) => {
		console.log('Clicked', item);
	};

	const shareSession = () => {
		console.log('Clicked share session');
	};

	const toggleFavorite = () => {
		isFavorite = !isFavorite;
		console.log('Clicked toggle favorite');
	};
</script>

<svelte:head>
	<title>Session Id</title>
</svelte:head>

<Header>
	<Toolbar>
		<ButtonGroup toSlot="start">
			<BackButton defaultHref="{defaultHref}" />
		</ButtonGroup>
		<ButtonGroup toSlot="end">
			<Button on:click="{toggleFavorite}">
				<Ionicon icon="{isFavorite ? star : starOutline}" toSlot="icon-only" />
			</Button>
			<Button on:click="{shareSession}">
				<Ionicon icon="{share}" toSlot="icon-only" />
			</Button>
		</ButtonGroup>
	</Toolbar>
</Header>

<Content>
	{#if session}
		<div class="ion-padding">
			<h1>{session.name}</h1>
			{#each session?.tracks as track}
				<span class="{'session-track-' + track.toLowerCase()}">{track}</span>
				<p>{session.description}</p>
				<Text color="medium">
					{session.dateTimeStart} &ndash; {session.dateTimeEnd}
					<br />
					{session.location}
				</Text>
			{/each}
		</div>
	{/if}

	<List>
		<Item button="{true}" on:click="{() => sessionClick('watch')}">
			<Label color="primary">Watch</Label>
		</Item>
		<Item button="{true}" on:click="{() => sessionClick('add to calendar')}">
			<Label color="primary">Add to Calendar</Label>
		</Item>
		<Item button="{true}" on:click="{() => sessionClick('mark as unwatched')}">
			<Label color="primary">Mark as Unwatched</Label>
		</Item>
		<Item button="{true}" on:click="{() => sessionClick('download video')}">
			<Label color="primary">Download video</Label>
			<Ionicon color="primary" icon="{cloudDownload}" size="small" toSlot="end" />
		</Item>
		<Item button="{true}" on:click="{() => sessionClick('leave feedback')}">
			<Label color="primary">Leave Feedback</Label>
		</Item>
	</List>
</Content>

<style>
	.session-track-ionic {
		color: var(--ion-color-primary);
	}

	.session-track-angular {
		color: var(--ion-color-angular);
	}

	.session-track-communication {
		color: var(--ion-color-communication);
	}

	.session-track-tooling {
		color: var(--ion-color-tooling);
	}

	.session-track-services {
		color: var(--ion-color-services);
	}

	.session-track-design {
		color: var(--ion-color-design);
	}

	.session-track-workshop {
		color: var(--ion-color-workshop);
	}

	.session-track-food {
		color: var(--ion-color-food);
	}

	.session-track-documentation {
		color: var(--ion-color-documentation);
	}

	.session-track-navigation {
		color: var(--ion-color-navigation);
	}

	/* Favorite Icon
 * --------------------------------------------------------
 */

	.show-favorite {
		position: relative;
	}

	.icon-heart-empty,
	.icon-heart {
		--border-radius: 50%;
		--padding-start: 0;
		--padding-end: 0;

		position: absolute;

		top: 5px;
		right: 5px;

		width: 48px;
		height: 48px;

		font-size: 16px;

		transition: transform 300ms ease;
	}

	.icon-heart-empty {
		transform: scale(1);
	}

	.icon-heart {
		transform: scale(0);
	}

	/* .show-favorite .icon-heart {
		transform: scale(1);
	}

	.show-favorite .icon-heart-empty {
		transform: scale(0);
	} */

	h1 {
		margin: 0;
	}
</style>
