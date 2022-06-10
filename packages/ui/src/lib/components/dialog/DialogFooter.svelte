<script lang="ts">
	import type { ColorType, CssClassType } from '@svonic/core';
	import { Footer, Toolbar } from '@svonic/core';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = 'light';
</script>

<Footer>
	<Toolbar class="{cssClass}" color="{color}">
		<slot name="start" slot="start" />
		<slot name="secondary" slot="secondary" />
		<slot />
		<slot name="primary" slot="primary" />
		<slot name="end" slot="end" />
	</Toolbar>
</Footer>

<style>
</style>
