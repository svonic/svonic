<script>
	import Button from '$lib/components/button/Button.svelte';
	import Application from '$lib/components/application/Application.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Toolbar from '$lib/components/toolbar/Toolbar.svelte';
	import Content from '$lib/components/content/Content.svelte';
	import Title from '$lib/components/title/Title.svelte';
</script>

<Application>
	<Header>
		<Toolbar>
			<Title>Header</Title>
		</Toolbar>
	</Header>

	<Content>
		<h1>Main Content</h1>
		<Button>Hello Ionic</Button>
		<slot />
	</Content>

	<Footer>
		<Toolbar>
			<Title>Footer</Title>
		</Toolbar>
	</Footer>
</Application>
