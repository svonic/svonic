<script lang="ts">
	import { ActionSheet, Button } from '@svonic/core';
	import { caretForwardCircle, close, heart, share, trash } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { ActionSheet, Button } from '@svonic/core';
	import { caretForwardCircle, close, heart, share, trash } from 'ionicons/icons/index.js';

	const showActionSheet = async () => {
		const actionSheet: ActionSheet = new ActionSheet({
			target: document.getElementById('action-sheet-target'),
			props: {
				class: 'my-custom-class',
				header: 'Albums',
				buttons: [
					{
						text: 'Delete',
						role: 'destructive',
						icon: trash,
						id: 'delete-button',
						data: {
							type: 'delete'
						},
						handler: () => {
							console.log('Delete clicked');
						}
					},
					{
						text: 'Share',
						icon: share,
						data: 10,
						handler: () => {
							console.log('Share clicked');
						}
					},
					{
						text: 'Play (open modal)',
						icon: caretForwardCircle,
						data: 'Data value',
						handler: () => {
							console.log('Play clicked');
						}
					},
					{
						text: 'Favorite',
						icon: heart,
						handler: () => {
							console.log('Favorite clicked');
						}
					},
					{
						text: 'Cancel',
						icon: close,
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				]
			}
		});

		actionSheet.$on('svo:did-dismiss', (event: CustomEvent) => {
			console.log('svo:did-dismiss', event.detail);
		});

		actionSheet.$on('svo:did-present', (event: CustomEvent) => {
			console.log('svo:did-present', event.detail);
		});

		actionSheet.$on('svo:will-dismiss', (event: CustomEvent) => {
			console.log('svo:will-dismiss', event.detail);
		});

		actionSheet.$on('svo:will-present', (event: CustomEvent) => {
			console.log('svo:will-present', event.detail);
		});

		setTimeout(async () => {
			actionSheet.present();

			const { role, data } = await actionSheet.onDidDismiss();
			console.log('onDidDismiss resolved with role and data', role, data);
		}, 50);
	};
<\/script>

<div id="action-sheet-target">
	<Button on:click="{showActionSheet}">Show Action Sheet</Button>
</div>
`;

	const showActionSheet = async () => {
		const actionSheet: ActionSheet = new ActionSheet({
			target: document.getElementById('action-sheet-target'),
			props: {
				class: 'my-custom-class',
				header: 'Albums',
				subHeader: 'Select an action to perform',
				buttons: [
					{
						text: 'Delete',
						role: 'destructive',
						icon: trash,
						id: 'delete-button',
						data: {
							type: 'delete'
						},
						handler: () => {
							console.log('Delete clicked');
						}
					},
					{
						text: 'Share',
						icon: share,
						data: 10,
						handler: () => {
							console.log('Share clicked');
						}
					},
					{
						text: 'Play (open modal)',
						icon: caretForwardCircle,
						data: 'Data value',
						handler: () => {
							console.log('Play clicked');
						}
					},
					{
						text: 'Favorite',
						icon: heart,
						handler: () => {
							console.log('Favorite clicked');
						}
					},
					{
						text: 'Cancel',
						icon: close,
						role: 'cancel',
						handler: () => {
							console.log('Cancel clicked');
						}
					}
				],
				...$$restProps
			}
		});

		actionSheet.$on('svo:did-dismiss', (event: CustomEvent) => {
			console.log('svo:did-dismiss', event.detail);
		});

		actionSheet.$on('svo:did-present', (event: CustomEvent) => {
			console.log('svo:did-present', event.detail);
		});

		actionSheet.$on('svo:will-dismiss', (event: CustomEvent) => {
			console.log('svo:will-dismiss', event.detail);
		});

		actionSheet.$on('svo:will-present', (event: CustomEvent) => {
			console.log('svo:will-present', event.detail);
		});

		setTimeout(async () => {
			actionSheet.present();

			const { role, data } = await actionSheet.onDidDismiss();
			console.log('onDidDismiss resolved with role and data', role, data);
		}, 50);
	};
</script>

<div id="action-sheet-target">
	<Button {...$$restProps} on:click="{showActionSheet}">Show Action Sheet</Button>
</div>
