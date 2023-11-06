<script lang="ts">
	import { Button, Buttons, Ionicon, Searchbar, Toolbar } from '@svonic/core';
	import { search } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Buttons, Ionicon, Searchbar, Toolbar } from '@svonic/core';
	import { search } from 'ionicons/icons/index.js';

	const clickedSearch = () => {
		console.log('clickedSearch');
	};
<\/script>

<Toolbar color="primary">
	<Buttons slot="primary">
		<Button on:click="{clickedSearch}">
			<Ionicon icon="{search}" slot="icon-only" />
		</Button>
	</Buttons>
	<Searchbar placeholder="Search Favorites" />
</Toolbar>
`;

	const clickedSearch = () => {
		console.log('clickedSearch');
	};
</script>

<Toolbar
	color="primary"
	{...$$restProps}
>
	<Buttons slot="primary">
		<Button on:click="{clickedSearch}">
			<Ionicon
				icon="{search}"
				slot="icon-only"
			/>
		</Button>
	</Buttons>
	<Searchbar placeholder="Search Favorites" />
</Toolbar>
