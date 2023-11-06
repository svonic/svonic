<script lang="ts">
	import { onMount } from 'svelte';

	let closeOverlay;

	onMount(async () => {
		let modalElement = document.querySelector('ion-modal');

		if (modalElement) {
			modalElement.cssClass = 'svo-modal';
			console.log(modalElement.componentProps);
			closeOverlay = () => {
				if (modalElement) {
					modalElement.dismiss({ data: Date.now() });
				}
			};
		}
	});
</script>

<slot />

<style>
	:global(.svo-modal) {
		justify-content: flex-end;
	}

	:global(.svo-modal .modal-wrapper) {
		--height: 100%;
		right: 0;
	}
</style>
