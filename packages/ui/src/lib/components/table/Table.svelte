<script lang="ts">
	import { onMount } from 'svelte';

	let scrollContainerHeight: number;
	let scrollContainerElement: HTMLElement | null;

	let scrollHeight: number;

	onMount(async () => {
		scrollContainerElement = document.querySelector('#scroll-container');
	});

	$: if (scrollContainerElement) {
		scrollContainerHeight = scrollContainerElement.clientHeight;
	}

	$: scrollHeight = scrollContainerHeight;
</script>

<div
	class="flex-grow overflow-auto"
	style="{scrollContainerHeight > 0 ? 'height: ' + scrollHeight + 'px;' : ''}"
>
	<table class="bg-white border-separate table-fixed w-full whitespace-no-wrap">
		<slot />
	</table>
</div>

<style>
</style>
