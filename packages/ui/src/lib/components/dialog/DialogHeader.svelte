<script lang="ts">
	import { Header, Toolbar } from '@svonic/core';
</script>

<Header translucent="{true}">
	<Toolbar>
		<slot
			name="start"
			slot="start"
		/>
		<slot
			name="secondary"
			slot="secondary"
		/>
		<slot />
		<slot
			name="primary"
			slot="primary"
		/>
		<slot
			name="end"
			slot="end"
		/>
	</Toolbar>
</Header>

<style>
</style>
