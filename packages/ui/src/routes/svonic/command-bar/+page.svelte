<script lang="ts">
	import CommandBar from '$lib/components/command-bar/CommandBar.svelte';
	import CommandBarButton from '$lib/components/command-bar/CommandBarButton.svelte';
	import CommandBarMenu from '$lib/components/command-bar/CommandBarMenu.svelte';
	import CommandBarMenuButton from '$lib/components/command-bar/CommandBarMenuButton.svelte';
	import { mdiContentSaveOutline, mdiDotsVertical, mdiPlus, mdiSchoolOutline } from '@mdi/js';
	import { Button, Icon, Title } from '@svonic/core';

	function dismiss() {
		console.log('dismiss');
	}
</script>

<div class="bg-white m-8 p-8">
	<div class="mb-8">
		<CommandBar
			class="shadow svo-command-bar"
			color="primary"
		>
			<svelte:fragment slot="start">
				<CommandBarButton
					iconStart="{mdiPlus}"
					label="New"
				/>
				<CommandBarButton
					iconEnd="{mdiContentSaveOutline}"
					label="Save"
				/>
				<CommandBarMenu
					id="option-menu-id"
					label="Ionic Options"
				>
					<CommandBarMenuButton
						label="Learn Ionic"
						iconStart="{mdiSchoolOutline}"
					/>
					<CommandBarMenuButton label="Documentation" />
					<CommandBarMenuButton label="Showcase" />
					<CommandBarMenuButton
						label="GitHub Repo"
						on:click="{dismiss}"
					/>
				</CommandBarMenu>
			</svelte:fragment>
			<svelte:fragment slot="end">
				<Button>
					<Icon
						path="{mdiDotsVertical}"
						size="large"
						toSlot="icon-only"
					/>
				</Button>
			</svelte:fragment>
			<Title>Default CommandBarButtons</Title>
		</CommandBar>
	</div>
</div>

<style global>
	.svo-command-bar {
		--min-height: 48px;
	}
</style>
