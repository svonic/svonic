<script lang="ts">
	import type { ColorType, CssClassType } from '@svonic/core';
	import { ButtonGroup, Toolbar } from '@svonic/core';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = 'primary';
</script>

<Toolbar
	class="{cssClass}"
	color="{color}"
>
	<ButtonGroup toSlot="end">
		<slot name="start" />
	</ButtonGroup>
	<slot
		name="secondary"
		slot="secondary"
	/>
	<slot />
	<slot
		name="primary"
		slot="primary"
	/>
	<ButtonGroup toSlot="end">
		<slot name="end" />
	</ButtonGroup>
</Toolbar>

<style>
</style>
