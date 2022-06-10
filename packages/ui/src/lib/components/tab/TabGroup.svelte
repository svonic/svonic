<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { key } from './context-tab';

	let tabIndex = 0;
	let tabIndexStore = writable(tabIndex);

	$: tabIndexStore.set(tabIndex);

	setContext(key, { tabIndex: tabIndexStore });
</script>

<div class="flex flex-col flex-grow h-full overflow-hidden">
	<slot />
</div>
