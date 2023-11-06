<script lang="ts">
	import { goto } from '$app/navigation';
	import type { UserOptions } from '$lib/models/user-options';
	import {
		Button,
		Buttons,
		Content,
		Header,
		Input,
		Item,
		Label,
		List,
		MenuButton,
		Text,
		Title,
		Toolbar
	} from '@svonic/core';

	let form: HTMLFormElement;
	let login: UserOptions = { username: '', password: '' };

	let passwordValid = false;
	let usernameValid = false;
	let submitted = false;

	const onSignup = async () => {
		await goto('/app/tabs/schedule');
	};
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<Header>
	<Toolbar>
		<Buttons slot="start">
			<MenuButton />
		</Buttons>
		<Title>Signup</Title>
	</Toolbar>
</Header>

<Content>
	<div class="signup-logo">
		<img
			alt="Ionic Logo"
			src="assets/img/appicon.svg"
		/>
	</div>

	<form action="">
		<List lines="none">
			<Item>
				<Label
					color="primary"
					position="stacked">Username</Label
				>
				<Input
					name="username"
					required="{true}"
					type="text"
				/>
			</Item>

			{#if !usernameValid || submitted === true}
				<Text
					class="ion-padding-start"
					color="danger"
				>
					<p class="ion-padding-start">Username is required</p>
				</Text>
			{/if}

			<Item>
				<Label
					color="primary"
					position="stacked">Password</Label
				>
				<Input
					autocapitalize="off"
					name="password"
					required="{true}"
					type="password"
					bind:value="{login.password}"
				/>
			</Item>

			{#if !passwordValid || submitted === true}
				<Text
					class="ion-padding-start"
					color="danger"
				>
					<p class="ion-padding-start">Password is required</p>
				</Text>
			{/if}
		</List>

		<div class="ion-padding">
			<Button
				expand="block"
				type="submit"
				on:click="{onSignup}">Create</Button
			>
		</div>
	</form>
</Content>

<style>
	.signup-logo {
		padding: 20px 0;
		min-height: 200px;
		text-align: center;
	}

	.signup-logo img {
		max-width: 150px;
	}

	.list {
		margin-bottom: 0;
	}
</style>
