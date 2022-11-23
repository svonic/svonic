<script lang="ts">
	import { Button, Ionicon, Toast } from '@svonic/core';
	import { bluetooth } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Text } from '@svonic/core';

	const presentToast = async () => {
		const toast: Toast = new Toast({
			target: document.getElementById('present-toast-target'),
			props: {
				message: 'Your settings have been saved.',
				duration: 2000,
				position: 'top',
				...$$restProps
			}
		});

		setTimeout(async () => {
			await toast.present();
		}, 50);
	};
<\/script>

<div class="flex flex-col items-center m-auto w-72" id="present-toast-target">
	<Button expand="block" on:click="{presentToast}">Pair <Ionicon slot="end" icon="{bluetooth}" /></Button>
</div>
`;

	const presentToast = async () => {
		const toast: Toast = new Toast({
			target: document.getElementById('present-toast-target'),
			props: {
				message: 'Your settings have been saved.',
				duration: 2000,
				position: 'top',
				...$$restProps
			}
		});

		setTimeout(async () => {
			await toast.present();
		}, 50);
	};
</script>

<div
	class="flex flex-col items-center m-auto w-72"
	id="present-toast-target"
>
	<Button
		expand="block"
		{...$$restProps}
		on:click="{presentToast}"
		>Pair <Ionicon
			slot="end"
			icon="{bluetooth}"
		/></Button
	>
</div>
