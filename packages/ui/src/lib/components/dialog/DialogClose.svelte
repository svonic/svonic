<script lang="ts">
	import { Button } from '@svonic/core';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const onClick = () => {
		dispatch('click');
	};
</script>

<Button on:click="{onClick}">
	<slot />
</Button>

<style>
</style>
