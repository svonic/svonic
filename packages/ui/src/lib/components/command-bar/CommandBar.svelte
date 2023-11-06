<script lang="ts">
	import type { ColorType, CssClassType } from '@svonic/core';
	import { Buttons, Toolbar } from '@svonic/core';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = 'primary';
</script>

<Toolbar
	class="{cssClass}"
	color="{color}"
>
	<Buttons slot="start">
		<slot name="start" />
	</Buttons>
	<slot
		name="secondary"
		slot="secondary"
	/>
	<slot />
	<slot
		name="primary"
		slot="primary"
	/>
	<Buttons slot="end">
		<slot name="end" />
	</Buttons>
</Toolbar>

<style>
</style>
