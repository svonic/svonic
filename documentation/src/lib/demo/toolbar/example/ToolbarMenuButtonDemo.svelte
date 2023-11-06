<script lang="ts">
	import { Button, Buttons, Ionicon, MenuButton, Title, Toolbar } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Buttons, MenuButton, Ionicon, Title, Toolbar } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';

	const clickedStart = () => {
		console.log('clickedStart');
	};
<\/script>

<Toolbar color="medium">
	<Buttons slot="start">
		<MenuButton autoHide="{false}" />
	</Buttons>
	<Buttons slot="secondary">
		<Button>
			<Ionicon icon="{star}" slot="icon-only" />
		</Button>
	</Buttons>
	<Title>Left side menu toggle</Title>
</Toolbar>

<Toolbar color="light">
	<Buttons slot="primary">
		<Button on:click="{clickedStart}">
			<Ionicon icon="{star}" slot="icon-only" />
		</Button>
	</Buttons>
	<Title>Right side menu toggle</Title>
	<Buttons slot="end">
		<MenuButton autoHide="{false}" />
	</Buttons>
</Toolbar>
`;

	const clickedStart = () => {
		console.log('clickedStart');
	};
</script>

<Toolbar
	color="medium"
	{...$$restProps}
>
	<Buttons slot="start">
		<MenuButton autoHide="{false}" />
	</Buttons>
	<Buttons slot="secondary">
		<Button>
			<Ionicon
				icon="{star}"
				slot="icon-only"
			/>
		</Button>
	</Buttons>
	<Title>Left side menu toggle</Title>
</Toolbar>

<Toolbar
	color="light"
	{...$$restProps}
>
	<Buttons slot="primary">
		<Button on:click="{clickedStart}">
			<Ionicon
				icon="{star}"
				slot="icon-only"
			/>
		</Button>
	</Buttons>
	<Title>Right side menu toggle</Title>
	<Buttons slot="end">
		<MenuButton autoHide="{false}" />
	</Buttons>
</Toolbar>
