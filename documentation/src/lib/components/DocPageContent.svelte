<script lang="ts">
	import ComponentEventBlock from '$lib/components/ComponentEventBlock.svelte';
	import ComponentKeyboardBlock from '$lib/components/ComponentKeyboardBlock.svelte';
	import ComponentMethodBlock from '$lib/components/ComponentMethodBlock.svelte';
	import ComponentPropBlock from '$lib/components/ComponentPropBlock.svelte';
	import ComponentSlotBlock from '$lib/components/ComponentSlotBlock.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import { mdiAndroid, mdiApple } from '@mdi/js';
	import {
		Buttons,
		Card,
		CardContent,
		Content,
		Footer,
		Header,
		Icon,
		Ionicon,
		Segment,
		SegmentButton,
		Title,
		Toolbar,
		type ModeType
	} from '@svonic/core';
	import { documentOutline, logoGithub, logoIonic } from 'ionicons/icons/index.js';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let componentData: ComponentData;

	let mode: Writable<ModeType> = getContext('mode');
	let segmentValue: ModeType = $mode;

	const updateMode = () => {
		mode.set(segmentValue);
	};
</script>

<Header class="z-8">
	<Toolbar>
		<Title class="capitalize">{componentData?.label}</Title>
		<Buttons slot="end">
			<Segment
				mode="ios"
				bind:value="{segmentValue}"
				on:ionChange="{updateMode}"
			>
				<SegmentButton
					value="ios"
					layout="icon-top"
				>
					iOS
					<Icon path="{mdiApple}" />
				</SegmentButton>
				<SegmentButton
					value="md"
					layout="icon-top"
				>
					MD
					<Icon path="{mdiAndroid}" />
				</SegmentButton>
			</Segment>
		</Buttons>
	</Toolbar>
</Header>

<Content fullscreen="{false}">
	<div class="flex flex-col bg-stone-200 dark:bg-stone-700">
		{#if componentData}
			<Card class="text-slate-900 dark:text-slate-100">
				<CardContent>
					<p>{componentData?.description}</p>
					<div class="flex flex-col gap-2 p-2 mt-4 bg-gray-100 dark:bg-gray-700">
						<div class="flex flex-row items-center">
							<Ionicon
								class="mr-2 text-lg"
								color="primary"
								icon="{logoIonic}"
							/>
							<h3 class="text-base">Ionic References</h3>
						</div>
						<div class="flex flex-row items-center">
							<Ionicon
								class="mr-2 text-lg"
								icon="{documentOutline}"
							/>
							<a
								class="text-slate-900 dark:text-slate-100 hover:underline"
								href="{componentData?.ionic?.documentationUrl}"
								target="_blank"
							>
								Documentation</a
							>
						</div>
						<div class="flex flex-row items-center">
							<Ionicon
								class="mr-2 text-lg"
								icon="{logoGithub}"
							/>
							<a
								class="text-slate-900 dark:text-slate-100 hover:underline"
								href="{componentData?.ionic?.sourceUrl}"
								target="_blank">View Source Code</a
							>
						</div>
					</div>
				</CardContent>
			</Card>

			<slot />

			<ComponentPropBlock propList="{componentData?.propList}" />
			<ComponentKeyboardBlock keyboardNavigationList="{componentData?.keyboardNavigationList}" />
			<ComponentEventBlock
				eventList="{componentData?.dispatchedEventList}"
				eventType="dispatched"
			/>
			<ComponentEventBlock
				eventList="{componentData?.forwardedEventList}"
				eventType="forwarded"
			/>
			<ComponentMethodBlock methodList="{componentData?.methodList}" />
			<ComponentSlotBlock slotList="{componentData?.slotList}" />
		{/if}
	</div>
	<div class="flex flex-row"></div>
	<Footer class="flex flex-row h-64 text-white bg-zinc-700 dark:bg-zinc-900">
		<div class="flex flex-col p-8 grow">
			<h3 class="text-2xl">Svonic</h3>
			<p class="pl-0.5">
				Svonic is a Svelte component library built on top of the Ionic Framework.
			</p>
		</div>
	</Footer>
</Content>

<style>
</style>
