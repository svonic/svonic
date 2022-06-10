<script lang="ts">
	import type { CssClassType } from '@svonic/core';
	import { Modal } from '@svonic/core';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let isOpen = false;
</script>

<Modal class="{cssClass}" isOpen="{isOpen}">
	<div class="ion-page">
		<slot />
	</div>
</Modal>

<style>
	:global(.svo-modal) {
		--height: 100%;
		justify-content: flex-end;
	}

	:global(.svo-modal .modal-wrapper) {
		--border-radius: 0;
	}
</style>
