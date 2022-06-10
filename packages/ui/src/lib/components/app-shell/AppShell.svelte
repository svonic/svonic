<script lang="ts">
	import type { ColorType } from '@svonic/core';
	import { Application, Content, Header, Title, Toolbar } from '@svonic/core';

	export let contentColor: ColorType = undefined;
	export let headerColor: ColorType = undefined;
</script>

<Application>
	<slot name="drawer-start" />
	<div class="ion-page" id="main">
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
		<Content color="{contentColor}" fullscreen="{false}">
			<slot />
		</Content>
	</div>
	<slot name="drawer-end" />
</Application>
