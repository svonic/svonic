<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Ionicon } from '@svonic/core';
	import { arrowBackSharp, chevronBack } from 'ionicons/icons/index.js';

	export let defaultHref = '';

	const goBack = async () => {
		await goto(defaultHref);
	};
</script>

<Button on:click="{goBack}">
	<Ionicon
		ios="chevron-back"
		iosIcon="{chevronBack}"
		md="arrow-back-sharp"
		mdIcon="{arrowBackSharp}"
		toSlot="icon-only"
	/>
</Button>

<style>
</style>
