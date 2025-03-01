<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import { appState } from '$lib/state.svelte';
	import { fontClass } from '$lib/utils';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Navbar></Navbar>
	<div
		data-theme={appState.theme}
		class={`bg-background dark:bg-background-dark flex w-screen justify-center px-4 pt-16 text-black md:px-6 dark:text-white ${fontClass()}`}
	>
		<div class="w-full max-w-7xl">{@render children()}</div>
	</div>
	<Footer></Footer>
</ParaglideJS>
