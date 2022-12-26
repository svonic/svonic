<script lang="ts">
	import BackButton from '$lib/components/BackButton.svelte';
	import type { Speaker } from '$lib/models/speaker';
	import {
		ActionSheet,
		Button,
		ButtonGroup,
		Chip,
		Content,
		getConfig,
		Header,
		Ionicon,
		Label,
		Toolbar
	} from '@svonic/core';
	import {
		call,
		callOutline,
		callSharp,
		logoGithub,
		logoInstagram,
		logoTwitter,
		mail,
		shareOutline,
		shareSharp
	} from 'ionicons/icons/index.js';
	import '../speaker-details.css';

	export let data;
	export let speaker: Speaker;

	const openContact = async (speaker: Speaker) => {
		const mode = getConfig()?.get('mode');

		const actionSheet: ActionSheet = new ActionSheet({
			target: document.getElementById('ionic-app'),
			props: {
				header: 'Contact ' + speaker.name,
				buttons: [
					{
						text: `Email ( ${speaker.email} )`,
						icon: mode !== 'ios' ? mail : null,
						handler: () => {
							window.open('mailto:' + speaker.email);
						}
					},
					{
						text: `Call ( ${speaker.phone} )`,
						icon: mode !== 'ios' ? call : null,
						handler: () => {
							window.open('tel:' + speaker.phone);
						}
					},
					{
						text: 'Cancel',
						role: 'cancel'
					}
				]
			}
		});

		setTimeout(() => {
			actionSheet.present();
		}, 20);
	};

	const openExternalUrl = async (url: string) => {
		window.open(url, '_blank');
	};

	const openSpeakerShare = async (speaker: Speaker) => {
		const actionSheet: ActionSheet = new ActionSheet({
			target: document.getElementById('ionic-app'),
			props: {
				header: 'Share ' + speaker.name,
				buttons: [
					{
						text: 'Copy Link',
						handler: () => {
							console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
							if ((window as any).cordova && (window as any).cordova.plugins.clipboard) {
								(window as any).cordova.plugins.clipboard.copy(
									'https://twitter.com/' + speaker.twitter
								);
							}
						}
					},
					{
						text: 'Share via ...'
					},
					{
						text: 'Cancel',
						role: 'cancel'
					}
				]
			}
		});

		setTimeout(() => {
			actionSheet.present();
		}, 20);
	};
</script>

<svelte:head>
	<title>Speaker Details</title>
</svelte:head>

<Content class="speaker-detail">
	<Header class="ion-no-border">
		<Toolbar>
			<ButtonGroup toSlot="start">
				<BackButton defaultHref="/app/tabs/speakers" />
			</ButtonGroup>
			{#if speaker}
				<ButtonGroup toSlot="end">
					<Button on:click="{() => openContact(speaker)}">
						<Ionicon
							ios="call-outline"
							iosIcon="{callOutline}"
							md="call-sharp"
							mdIcon="{callSharp}"
							toSlot="icon-only"
						/>
					</Button>
					<Button on:click="{() => openSpeakerShare(speaker)}">
						<Ionicon
							ios="share-outline"
							iosIcon="{shareOutline}"
							md="share-sharp"
							mdIcon="{shareSharp}"
							toSlot="icon-only"
						/>
					</Button>
				</ButtonGroup>
			{/if}
		</Toolbar>
	</Header>

	<div class="speaker-background">
		<img
			alt="{speaker?.name}"
			src="{speaker?.profilePic}"
		/>
		<h2>{speaker?.name}</h2>
	</div>

	<div class="ion-padding speaker-detail">
		<p>{speaker?.about} Say hello on social media!</p>

		<hr />

		<Chip
			color="twitter"
			on:click="{() => openExternalUrl('https://twitter.com/' + speaker.twitter)}"
		>
			<Ionicon icon="{logoTwitter}" />
			<Label>Twitter</Label>
		</Chip>

		<Chip
			color="dark"
			on:click="{() => openExternalUrl('https://github.com/ionic-team/ionic')}"
		>
			<Ionicon icon="{logoGithub}" />
			<Label>GitHub</Label>
		</Chip>

		<Chip
			color="instagram"
			on:click="{() => openExternalUrl('https://instagram.com/ionicframework')}"
		>
			<Ionicon icon="{logoInstagram}" />
			<Label>Instagram</Label>
		</Chip>
	</div>
</Content>

<style>
</style>
