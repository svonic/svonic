<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		ButtonGroup,
		Content,
		DrawerButton,
		Header,
		Item,
		List,
		Title,
		Toolbar
	} from '@svonic/core';

	let username = '';

	const changePassword = () => {
		console.log('Clicked to change password');
	};

	const changeUsername = () => {
		console.log('changeUsername', true);
	};

	const logout = () => {
		console.log('logout', true);
	};

	const support = async () => {
		await goto('/support');
	};

	const updatePicture = () => {
		console.log('updatePicture', username);
	};
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<Header>
	<Toolbar>
		<ButtonGroup toSlot="start">
			<DrawerButton />
		</ButtonGroup>
		<Title>Account</Title>
	</Toolbar>
</Header>

<Content>
	{#if username}
		<div class="ion-padding-top ion-text-center">
			<img alt="avatar" src="https://www.gravatar.com/avatar?d=mm&s=140" />
			<h2>{username}</h2>

			<List inset="{true}">
				<Item on:click="{updatePicture}">Update Picture</Item>
				<Item on:click="{changeUsername}">Change Username</Item>
				<Item on:click="{changePassword}">Change Password</Item>
				<Item on:click="{support}">Support</Item>
				<Item on:click="{logout}">Logout</Item>
			</List>
		</div>
	{/if}
</Content>

<style>
	img {
		max-width: 140px;
		border-radius: 50%;
	}
</style>
