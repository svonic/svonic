<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$lib/actions/form';
	import type { UserOptions } from '$lib/models/user-options';
	import {
		Button,
		Buttons,
		Col,
		Content,
		Header,
		Input,
		Item,
		Label,
		List,
		MenuButton,
		Row,
		Text,
		Title,
		Toolbar
	} from '@svonic/core';

	let login: UserOptions = { username: '', password: '' };

	let passwordValid = true;
	let usernameValid = true;
	let submitted = false;

	const onLogin = (form) => {
		submitted = true;
		console.log('login form', form);

		// if (form.checkValidity()) {
		// 	console.log('loggedIn', true);
		// }
	};

	const onSignup = async () => {
		await goto('/signup');
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Header>
	<Toolbar>
		<Buttons slot="start">
			<MenuButton />
		</Buttons>
		<Title>Login</Title>
	</Toolbar>
</Header>

<Content>
	<div class="login-logo">
		<img
			src="assets/img/appicon.svg"
			alt="Ionic logo"
		/>
	</div>

	<form
		action="/login"
		autocomplete="off"
		method="post"
		use:enhance="{{
			result: async ({ form }) => {
				console.log(form);
				form.reset();
			}
		}}"
	>
		<List>
			<Item>
				<Label
					color="primary"
					position="stacked">Username</Label
				>
				<Input
					autocapitalize="off"
					name="username"
					required="{true}"
					spellcheck="{false}"
					type="text"
					bind:value="{login.username}"
				/>
			</Item>

			<Text
				class="ion-padding-start"
				color="danger"
			>
				{#if !usernameValid || submitted === true}
					<p class="ion-padding-start">Username is required</p>
				{/if}
			</Text>

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

			<Text
				class="ion-padding-start"
				color="danger"
			>
				{#if !passwordValid || submitted === true}
					<p class="ion-padding-start">Password is required</p>
				{/if}
			</Text>
		</List>

		<Row>
			<Col>
				<Button
					expand="block"
					type="submit">Login</Button
				>
			</Col>
			<Col>
				<Button
					color="light"
					expand="block"
					on:click="{onSignup}">Signup</Button
				>
			</Col>
		</Row>
	</form>
</Content>

<style>
	.login-logo {
		padding: 20px 0;
		min-height: 200px;
		text-align: center;
	}

	.login-logo img {
		max-width: 150px;
	}
</style>
