<script lang="ts">
	import { page } from '$app/stores';
	import { scrollIntoView } from '$lib/utils/scroll-into-view';
	import { CardTitle, type CssClassType } from '@svonic/core';

	let cssClass: CssClassType = undefined;
	let urlElementId = $page.url.hash ? $page.url.hash.split('#')[1].toLowerCase() : '';
	let titleAnchor = '';

	export { cssClass as class };

	export let title: string;

	const setAnchorLink = (title: string) => {
		titleAnchor = title.toLowerCase().replace(/\s/g, '-');
	};

	$: setAnchorLink(title);
</script>

<CardTitle class="{cssClass}">
	<a
		class="text-slate-900 dark:text-slate-100"
		href="#{titleAnchor}"
		id="{titleAnchor}"
		use:scrollIntoView="{urlElementId}">{title}</a
	>
</CardTitle>

<style>
</style>
