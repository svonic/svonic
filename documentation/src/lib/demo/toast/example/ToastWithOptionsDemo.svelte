<script lang="ts">
	import { Button, Toast } from '@svonic/core';
	import { informationCircle, star } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Toast } from '@svonic/core';
	import { informationCircle, star } from 'ionicons/icons/index.js';

	const presentToastWithOptions = async () => {
		const toast: Toast = new Toast({
			target: document.getElementById('present-toast-with-options-target'),
			props: {
				header: 'Toast header',
				message: 'Click to Close',
				icon: informationCircle,
				position: 'top',
				buttons: [
					{
						side: 'start',
						icon: star,
						text: 'Favorite',
						handler: () => {
							console.log('Favorite clicked');
						}
					},
					{
						text: 'Done',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				],
				...$$restProps
			}
		});

		setTimeout(async () => {
			await toast.present();

			const { role } = await toast.onDidDismiss();
			console.log('onDidDismiss resolved with role', role);
		}, 50);
	};
<\/script>

<div class="flex flex-col items-center m-auto w-72" id="present-toast-with-options-target">
	<Button expand="block" on:click="{presentToastWithOptions}">Present Toast</Button>
</div>
`;

	const presentToastWithOptions = async () => {
		const toast: Toast = new Toast({
			target: document.getElementById('present-toast-with-options-target'),
			props: {
				header: 'Toast header',
				message: 'Click to Close',
				icon: informationCircle,
				position: 'top',
				buttons: [
					{
						side: 'start',
						icon: star,
						text: 'Favorite',
						handler: () => {
							console.log('Favorite clicked');
						}
					},
					{
						text: 'Done',
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				],
				...$$restProps
			}
		});

		setTimeout(async () => {
			await toast.present();

			const { role } = await toast.onDidDismiss();
			console.log('onDidDismiss resolved with role', role);
		}, 50);
	};
</script>

<div class="flex flex-col items-center m-auto w-72" id="present-toast-with-options-target">
	<Button expand="block" {...$$restProps} on:click="{presentToastWithOptions}">Present Toast</Button
	>
</div>
