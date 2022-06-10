<script lang="ts">
	import { ActionSheet, Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { ActionSheet, Button } from '@svonic/core';

	const showActionSheet = async () => {
		const actionSheet: ActionSheet = new ActionSheet({
			target: document.getElementById('action-sheet-target'),
			props: {
				backdropDismiss: false,
				header: 'Albums',
				buttons: [
					{ text: 'Delete', role: 'destructive' },
					{ text: 'Share' },
					{ text: 'Play' },
					{ text: 'Favorite' },
					{ text: 'Cancel', role: 'cancel' }
				]
			}
		});

		setTimeout(() => {
			actionSheet.present();
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
				backdropDismiss: false,
				header: 'Albums',
				buttons: [
					{ text: 'Delete', role: 'destructive' },
					{ text: 'Share' },
					{ text: 'Play' },
					{ text: 'Favorite' },
					{ text: 'Cancel', role: 'cancel' }
				],
				...$$restProps
			}
		});

		setTimeout(() => {
			actionSheet.present();
		}, 50);
	};
</script>

<div id="action-sheet-target">
	<Button {...$$restProps} on:click="{showActionSheet}">Show Action Sheet</Button>
</div>
