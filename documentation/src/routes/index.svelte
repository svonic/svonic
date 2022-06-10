<script context="module" lang="ts">
	export async function load() {
		return {
			status: 301,
			redirect: '/components/button'
		};
	}
</script>

<script lang="ts">
	import { Content } from '@svonic/core';
</script>

<Content>
	<h1>Welcome to Svonic</h1>
</Content>

<style>
</style>
