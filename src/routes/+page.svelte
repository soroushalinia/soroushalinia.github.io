<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { fly } from 'svelte/transition';

	let mounted: boolean = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="flex h-[calc(100vh-197px)] md:h-[calc(100vh-137px)] w-full flex-col items-center justify-center px-4 py-12">
		<img
			src="/avatar.jpg"
			class="h-32 w-32 rounded-full shadow-lg md:h-40 md:w-40"
			alt="Avatar"
			in:fly={{ x: -100, duration: 500 }}
		/>
		<h1
			class="text-primary mt-6 text-2xl font-bold md:text-3xl lg:text-4xl"
			in:fly={{ y: -20, duration: 500, delay: 200 }}
		>
			{m.name()}
		</h1>
		<p
			class="mt-4 max-w-xl text-center text-base font-medium text-gray-600 md:text-lg dark:text-gray-300"
			in:fly={{ y: 20, duration: 500, delay: 400 }}
		>
			{m.description()}
		</p>
		<button
			class="bg-primary hover:bg-secondary mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-colors"
			in:fly={{ x: 100, duration: 500, delay: 600 }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-5 w-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
				/>
			</svg>
			<span>{m.download_cv()}</span>
		</button>
	</div>
{/if}
