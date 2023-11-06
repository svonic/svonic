<script lang="ts">
	import type { Speaker } from '$lib/models/speaker';
	import { speakersStore } from '$lib/stores/app.store';
	import {
		Avatar,
		Buttons,
		Card,
		CardContent,
		CardHeader,
		Col,
		Content,
		Grid,
		Header,
		Img,
		Item,
		Label,
		List,
		MenuButton,
		Row,
		Title,
		Toolbar
	} from '@svonic/core';
	import './speakers.css';

	export let data;
	export let speakers: Speaker[];

	$: {
		// speakersStore.update(state => ({
		// 	...state,
		// 	speakers: speakersStore.speakers
		// }));
		loadSpeakerStore(speakers);
	}

	const loadSpeakerStore = (speakers: Speaker[]) => {
		speakersStore.set(speakers);

		console.log('speakers', $speakersStore);
	};
</script>

<svelte:head>
	<title>Speakers</title>
</svelte:head>

<Header>
	<Toolbar>
		<Buttons slot="start">
			<MenuButton />
		</Buttons>
		<Title>Speakers</Title>
	</Toolbar>
</Header>

<Content
	class="speakers-page"
	fullscreen="{true}"
>
	<Header collapse="condense">
		<Toolbar>
			<Title size="large">Speakers</Title>
		</Toolbar>
	</Header>

	<Grid fixed="{true}">
		<Row>
			{#if $speakersStore && $speakersStore.length > 0}
				{#each $speakersStore as speaker}
					<Col
						size="12"
						sizeMd="6"
					>
						<Card class="speaker-card">
							<CardHeader>
								<Item
									class="speaker-item"
									detail="{false}"
									href="/app/tabs/speakers/speaker-details/{speaker.id}"
									lines="none"
								>
									<Avatar slot="start">
										<Img
											alt="{speaker.name + ' profile picture'}"
											src="{speaker.profilePic}"
										/>
									</Avatar>
									<Label>
										<h2>{speaker.name}</h2>
										<p>{speaker.title}</p>
									</Label>
								</Item>
							</CardHeader>

							<CardContent>
								<List lines="none">
									{#each speaker.sessions as session}
										<Item
											detail="{false}"
											href="/app/tabs/speakers/session/{session.id}"
										>
											<Label>
												<h3>{session.name}</h3>
											</Label>
										</Item>

										<Item
											detail="{false}"
											href="/app/tabs/speakers/speaker-details/{speaker.id}"
										>
											<Label>
												<h3>About {speaker.name}</h3>
											</Label>
										</Item>
									{/each}
								</List>
							</CardContent>
						</Card>
					</Col>
				{/each}
			{/if}
		</Row>
	</Grid>
</Content>

<style>
</style>
