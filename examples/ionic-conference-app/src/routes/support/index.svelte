<script lang="ts">
	import {
		Button,
		ButtonGroup,
		Content,
		DrawerButton,
		Header,
		InputTextArea,
		Item,
		Label,
		List,
		Text,
		Title,
		Toolbar
	} from '@svonic/core';
</script>

<svelte:head>
	<title>Support</title>
</svelte:head>

<Header>
	<Toolbar>
		<ButtonGroup toSlot="start">
			<DrawerButton />
		</ButtonGroup>
		<Title>Support</Title>
	</Toolbar>
</Header>

<Content>
	<div class="support-logo">
		<img alt="Ionic Logo" src="assets/img/appicon.svg" />
	</div>

	<form action="">
		<List lines="none">
			<Item>
				<Label>Enter your support message below</Label>
				<InputTextArea />
			</Item>

			<Text>
				<p>Support message is required</p>
			</Text>

			<div>
				<Button expand="block" type="submit">Submit</Button>
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
