<script lang="ts">
	// import { dismissModal } from '$lib/components/dialog/dialog';
	import { Button } from '@svonic/core';

	function dismissModal() {
		console.log('dismissModal');
	}
</script>

<Button on:click="{dismissModal}">
	<slot />
</Button>

<style>
</style>
