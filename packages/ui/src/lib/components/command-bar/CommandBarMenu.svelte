<script lang="ts">
	import { mdiChevronDown } from '@mdi/js';
	import type { CssClassType } from '@svonic/core';
	import { Content, List, Popover } from '@svonic/core';
	import CommandBarButton from './CommandBarButton.svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let id: string = '';
	export let label: string | undefined = undefined;

	function onDidDismiss(event: CustomEvent) {
		const role = event.detail;
		console.log('onDidDismiss resolved with role', role);
	}
</script>

<CommandBarButton
	id="{id}"
	iconEnd="{mdiChevronDown}"
	label="{label}"
/>
<Popover
	class="{cssClass}"
	dismissOnSelect="{true}"
	trigger="{id}"
	triggerAction="click"
	on:didDismiss="{onDidDismiss}"
>
	<Content>
		<List lines="none">
			<slot />
		</List>
	</Content>
</Popover>

<style>
</style>
