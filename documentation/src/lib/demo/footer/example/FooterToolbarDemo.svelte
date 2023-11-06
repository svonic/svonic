<script lang="ts">
	import { Button, Buttons, Footer, Ionicon, Title, Toolbar } from '@svonic/core';
	import { refresh } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Buttons, Footer, Ionicon, Title, Toolbar } from '@svonic/core';
	import { refresh } from 'ionicons/icons/index.js';
<\/script>

<Footer>
	<Toolbar color="light">
		<Title>Click to Add Text</Title>
		<Buttons slot="end">
			<Button id="changeText" on:click="{toggleText}">
				<Ionicon icon="{refresh}" slot="start" />
			</Button>
		</Buttons>
	</Toolbar>
</Footer>
`;

	const toggleText = () => {
		console.log('toggleText');
	};
</script>

<Footer {...$$restProps}>
	<Toolbar color="light">
		<Title>Click to Add Text</Title>
		<Buttons slot="end">
			<Button
				id="changeText"
				on:click="{toggleText}"
			>
				<Ionicon
					icon="{refresh}"
					slot="start"
				/>
			</Button>
		</Buttons>
	</Toolbar>
</Footer>
