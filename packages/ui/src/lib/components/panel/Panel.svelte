<script lang="ts">
	// import { IonicShowModal } from '$lib/componentsservices/ionicControllers';
	import { onMount } from 'svelte';

	// export const showModal = () => {
	// 	IonicShowModal('modal-extra', Modal, {
	// 		firstName: 'Douglas',
	// 		lastName: 'Adams',
	// 		middleInitial: 'N'
	// 	}).then(console.log);
	// };

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
