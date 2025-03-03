<script lang="ts">
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="flex h-[calc(100vh-173px)] w-full flex-col justify-between sm:h-[calc(100vh-137px)]">
	<div
		class="text-primary flex h-full w-full flex-col items-center justify-center md:gap-2 xl:gap-4"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-24 w-24 md:h-28 md:w-28 xl:h-36 xl:w-36"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
			/>
		</svg>
		<h1 class="text-xl font-bold md:text-2xl xl:text-4xl">
			{#if page.status === 404}{m.error_404()}{:else}{m.error_general()}{/if}
		</h1>
	</div>
</div>
