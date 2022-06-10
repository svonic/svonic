<script lang="ts">
	import type { ComponentKeyboardNavigation } from '$lib/types/component-data.type';
	import { Card, CardContent, CardHeader } from '@svonic/core';
	import BlockTitle from './BlockTitle.svelte';
	import KeyboardKey from './KeyboardKey.svelte';

	export let keyboardNavigationList: ComponentKeyboardNavigation[] = [];
</script>

{#if keyboardNavigationList.length > 0}
	<Card class="text-slate-900 dark:text-slate-100">
		<CardHeader>
			<BlockTitle title="Keyboard Navigation" />
		</CardHeader>
		<CardContent>
			{#each keyboardNavigationList as keyboardNavigation (keyboardNavigation.description)}
				<p class="p-2">{keyboardNavigation.description}</p>
				{#if keyboardNavigation.valueList.length > 0}
					<div class="flex flex-row">
						<div class="basis-2/5 sm:basis-2/6 font-bold p-1 sm:p-2">Key</div>
						<div class="basis-3/5 sm:basis-4/6 font-bold p-1 sm:p-2">Function</div>
					</div>
					{#each keyboardNavigation.valueList as keyboard (keyboard)}
						<div class="border-b-2 dark:border-b-neutral-900 flex flex-row last:border-b-0">
							<div class="basis-2/5 sm:basis-2/6 p-1 sm:p-2">
								{keyboard.key}
								<div class="flex flex-row gap-2 items-center text-gray-600 text-base">
									{#each keyboard.keyCodeList as keyCode, index}
										{#if index > 0}
											<span>or</span>
										{/if}
										{#each keyCode.key as key, index}
											<div class="flex flex-row gap-2 items-center">
												{#if index > 0}
													<span>+</span>
												{/if}
												<KeyboardKey keyCode="{key}" />
											</div>
										{/each}
									{/each}
								</div>
							</div>
							<div class="basis-3/5 sm:basis-4/6 p-1 sm:p-2">{keyboard.function}</div>
						</div>
					{/each}
				{/if}
			{/each}
		</CardContent>
	</Card>
{/if}

<style>
	/* kbd {
		border: 3px outset #f3f3f3;
		background-color: #f3f3f3;
		padding: 0px 2px;
		cursor: default;
	}

	kbd:hover {
		border: 3px inset #f3f3f3;
	} */
</style>
