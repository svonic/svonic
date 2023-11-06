<script lang="ts">
	import {
		Button,
		Buttons,
		Content,
		Datetime,
		Header,
		Ionicon,
		Item,
		Label,
		List,
		MenuButton,
		Popover,
		Select,
		SelectOption,
		Text,
		Toolbar
	} from '@svonic/core';
	import { format } from 'date-fns';
	import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons/index.js';
	import AboutPopover from './_AboutPopover.svelte';
	import './about.css';

	let conferenceDate = '2047-05-17';
	let formattedConferenceDate = '';
	let location = 'madison';

	let selectOptions = {
		header: 'Select a Location'
	};

	$: formattedConferenceDate = format(new Date(conferenceDate), 'MMM d, yyyy');
	$: formattedConferenceDateYear = format(new Date(conferenceDate), 'y');
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Content class="about-page">
	<Header class="ion-no-border">
		<Toolbar>
			<Buttons slot="start">
				<MenuButton />
			</Buttons>
			<Buttons slot="end">
				<Button id="more-info-button">
					<Ionicon
						icon="{ellipsisVertical}"
						ios="{ellipsisHorizontal}"
						md="{ellipsisVertical}"
						slot="icon-only"
					/>
				</Button>
				<AboutPopover id="more-info-button" />
			</Buttons>
		</Toolbar>
	</Header>

	<div class="about-header">
		<!-- Instead of loading an image each time the select changes, use opacity to transition them -->
		<div
			class="about-image madison"
			style="{location === 'madison' ? 'opacity : 1' : ''}"
		></div>
		<div
			class="about-image austin"
			style="{location === 'austin' ? 'opacity : 1' : ''}"
		></div>
		<div
			class="about-image chicago"
			style="{location === 'chicago' ? 'opacity : 1' : ''}"
		></div>
		<div
			class="about-image seattle"
			style="{location === 'seattle' ? 'opacity : 1' : ''}"
		></div>
	</div>

	<div class="about-info">
		<h3 class="ion-padding-top ion-padding-start">About</h3>

		<p class="ion-padding-start ion-padding-end">
			The Ionic Conference is a one-day conference on {formattedConferenceDate} featuring talks from
			the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes
			migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many
			other technologies used in Ionic 2. Tickets are completely sold out, and we're expecting more than
			1000 developers - making this the largest Ionic conference ever!
		</p>

		<h3 class="ion-padding-top ion-padding-start">Details</h3>

		<List lines="none">
			<Item>
				<Label>Location</Label>
				<Select
					interfaceOptions="{selectOptions}"
					bind:value="{location}"
				>
					<SelectOption value="madison">Madison, WI</SelectOption>
					<SelectOption value="austin">Austin, TX</SelectOption>
					<SelectOption value="chicago">Chicago, IL</SelectOption>
					<SelectOption value="seattle">Seattle, WA</SelectOption>
				</Select>
			</Item>
			<Item
				button="{true}"
				id="open-date-input"
			>
				<Label>Date</Label>
				<Text slot="end">{conferenceDate}</Text>
				<Popover
					alignment="end"
					id="date-input-popover"
					showBackdrop="{false}"
					side="top"
					trigger="open-date-input"
				>
					<Datetime
						max="2056"
						presentation="date"
						bind:value="{conferenceDate}"
					/>
				</Popover>
			</Item>
		</List>

		<h3 class="ion-padding-top ion-padding-start">Internet</h3>

		<List lines="none">
			<Item>
				<Label>Wifi network</Label>
				<Label class="ion-text-end">ica{formattedConferenceDateYear}</Label>
			</Item>
			<Item>
				<Label>Password</Label>
				<Label class="ion-text-end">makegoodthings</Label>
			</Item>
		</List>
	</div>
</Content>

<style>
	.about-header {
		position: relative;

		width: 100%;
		height: 30%;
	}

	.about-header .about-image {
		position: absolute;

		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;

		opacity: 0;

		transition: opacity 500ms ease-in-out;
	}

	.about-header .madison {
		background-image: url(/assets/img/about/madison.jpg);
	}

	.about-header .austin {
		background-image: url(/assets/img/about/austin.jpg);
	}

	.about-header .chicago {
		background-image: url(/assets/img/about/chicago.jpg);
	}

	.about-header .seattle {
		background-image: url(/assets/img/about/seattle.jpg);
	}

	.about-info {
		position: absolute;
		margin-top: -10px;
		border-radius: 10px;
		background: var(--ion-background-color, #fff);
	}

	.about-info h3 {
		margin-top: 0;
	}

	.about-info p {
		line-height: 130%;

		color: var(--ion-color-dark);
	}
</style>
