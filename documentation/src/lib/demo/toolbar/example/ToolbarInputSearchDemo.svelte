<script lang="ts">
	import { Button, ButtonGroup, InputSearch, Ionicon, Toolbar } from '@svonic/core';
	import { search } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, ButtonGroup, InputSearch, Ionicon, Toolbar } from '@svonic/core';
	import { search } from 'ionicons/icons/index.js';

	const clickedSearch = () => {
		console.log('clickedSearch');
	};
<\/script>

<Toolbar color="primary">
	<ButtonGroup toSlot="primary">
		<Button on:click="{clickedSearch}">
			<Ionicon icon="{search}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<InputSearch placeholder="Search Favorites" />
</Toolbar>
`;

	const clickedSearch = () => {
		console.log('clickedSearch');
	};
</script>

<Toolbar color="primary" {...$$restProps}>
	<ButtonGroup toSlot="primary">
		<Button on:click="{clickedSearch}">
			<Ionicon icon="{search}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<InputSearch placeholder="Search Favorites" />
</Toolbar>
