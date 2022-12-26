<script lang="ts">
	import SessionDetail from '$lib/components/SessionDetail.svelte';
	import type { Session } from '$lib/models/session';

	export let data;
	export let session: Session;
</script>

<SessionDetail
	defaultHref="/app/tabs/speakers/"
	session="{session}"
/>

<style>
</style>
