<script lang="ts">
	import { Button, ButtonGroup, DrawerButton, Ionicon, Title, Toolbar } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, ButtonGroup, DrawerButton, Ionicon, Title, Toolbar } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';

	const clickedStart = () => {
		console.log('clickedStart');
	};
<\/script>

<Toolbar color="medium">
	<ButtonGroup toSlot="start">
		<DrawerButton autoHide="{false}" />
	</ButtonGroup>
	<ButtonGroup toSlot="secondary">
		<Button>
			<Ionicon icon="{star}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<Title>Left side menu toggle</Title>
</Toolbar>

<Toolbar color="light">
	<ButtonGroup toSlot="primary">
		<Button on:click="{clickedStart}">
			<Ionicon icon="{star}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<Title>Right side menu toggle</Title>
	<ButtonGroup toSlot="end">
		<DrawerButton autoHide="{false}" />
	</ButtonGroup>
</Toolbar>
`;

	const clickedStart = () => {
		console.log('clickedStart');
	};
</script>

<Toolbar color="medium" {...$$restProps}>
	<ButtonGroup toSlot="start">
		<DrawerButton autoHide="{false}" />
	</ButtonGroup>
	<ButtonGroup toSlot="secondary">
		<Button>
			<Ionicon icon="{star}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<Title>Left side menu toggle</Title>
</Toolbar>

<Toolbar color="light" {...$$restProps}>
	<ButtonGroup toSlot="primary">
		<Button on:click="{clickedStart}">
			<Ionicon icon="{star}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<Title>Right side menu toggle</Title>
	<ButtonGroup toSlot="end">
		<DrawerButton autoHide="{false}" />
	</ButtonGroup>
</Toolbar>
