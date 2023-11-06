<script lang="ts">
	import type { ColorType } from '@svonic/core';
	import { App, Content, Header, Title, Toolbar } from '@svonic/core';

	export let contentColor: ColorType = undefined;
	export let headerColor: ColorType = undefined;
</script>

<App>
	<slot name="menu-start" />
	<div
		class="ion-page"
		id="main"
	>
		<Header translucent="{true}">
			<Toolbar color="{headerColor}">
				<div slot="start">
					<slot name="app-toolbar-start" />
				</div>
				<Title>
					<slot name="app-toolbar-title" />
				</Title>
				<div slot="end">
					<slot name="app-toolbar-end" />
				</div>
			</Toolbar>
		</Header>
		<Content
			color="{contentColor}"
			fullscreen="{false}"
		>
			<slot />
		</Content>
	</div>
	<slot name="menu-end" />
</App>
