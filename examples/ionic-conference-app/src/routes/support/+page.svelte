<script lang="ts">
	import {
		Button,
		Buttons,
		Content,
		Header,
		Item,
		Label,
		List,
		MenuButton,
		Text,
		Textarea,
		Title,
		Toolbar
	} from '@svonic/core';
</script>

<svelte:head>
	<title>Support</title>
</svelte:head>

<Header>
	<Toolbar>
		<Buttons slot="start">
			<MenuButton />
		</Buttons>
		<Title>Support</Title>
	</Toolbar>
</Header>

<Content>
	<div class="support-logo">
		<img
			alt="Ionic Logo"
			src="assets/img/appicon.svg"
		/>
	</div>

	<form action="">
		<List lines="none">
			<Item>
				<Label>Enter your support message below</Label>
				<Textarea />
			</Item>

			<Text>
				<p>Support message is required</p>
			</Text>

			<div>
				<Button
					expand="block"
					type="submit">Submit</Button
				>
			</div>
		</List>
	</form>
</Content>

<style>
	.support-logo {
		padding: 20px 0;
		min-height: 200px;
		text-align: center;
	}

	.support-logo img {
		max-width: 150px;
	}

	.list {
		margin-bottom: 0;
	}
</style>
