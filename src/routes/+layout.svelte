<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import { appState } from '$lib/state.svelte';
	import { fontClass } from '$lib/utils';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Navbar></Navbar>
	<div
		data-theme={appState.theme}
		class={`bg-background dark:bg-background-dark pt-16 ${fontClass()}`}
	>
		{@render children()}
	</div>
</ParaglideJS>
