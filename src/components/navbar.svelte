<script lang="ts">
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import { appState } from '$lib/state.svelte';
	import { fontClass, isActiveRoute, switchToLanguage } from '$lib/utils';

	let menuOpen: boolean = $state(false);

	$effect(() => {
		appState.lang = i18n.getLanguageFromUrl(page.url);
	});

	const navLinks = [
		{ href: '/', label: m.home_link() },
		{ href: '/about', label: m.about_link() },
		{ href: '/blog', label: m.blog_link() },
		{ href: '/projects', label: m.projects_link() }
	];
</script>

<nav
	data-theme={appState.theme}
	class={`bg-background/95 dark:bg-background-dark/95 supports-[backdrop-filter]:bg-background/60
     dark:supports-[backdrop-filter]:bg-background-dark/60 dark:border-border-dark border-border fixed top-0 z-40 w-full
      border-b backdrop-blur ${fontClass()}`}
>
	<div class="flex h-16 items-center justify-between">
		<div class="flex items-center gap-6 px-4 md:gap-10">
			<a href="/"
				><img class="h-10 w-10 rounded-full object-cover" src="/avatar.jpg" alt="Avatar" /></a
			>
			{#each navLinks as link}
				<a
					class={`hover:text-primary hidden text-center text-sm font-medium transition-colors md:block ${isActiveRoute(link.href) ? 'text-primary' : 'text-gray dark:text-white'}`}
					href={link.href}>{link.label}</a
				>
			{/each}
		</div>
		<div class="flex flex-row gap-4 px-4">
			<a
				href="/search"
				aria-label="Search Page"
				class="hidden h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-300 md:flex dark:text-white dark:hover:bg-gray-800"
				><svg
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
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			</a>

			<button
				aria-label="Toggle Language"
				class="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-300 dark:text-white dark:hover:bg-gray-800"
				onclick={() => {
					if (appState.lang === 'en') {
						switchToLanguage('fa');
						appState.lang = 'fa';
					} else if (appState.lang === 'fa') {
						switchToLanguage('en');
						appState.lang = 'en';
					}
				}}
				><svg
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
						d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
					/>
				</svg>
			</button>
			<button
				aria-label="Toggle Theme"
				class="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-300 dark:text-white dark:hover:bg-gray-800"
				onclick={() => {
					if (appState.theme === 'light') {
						appState.theme = 'dark';
					} else if (appState.theme === 'dark') {
						appState.theme = 'light';
					}
				}}
			>
				{#if appState.theme === 'light'}
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
							d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
						/>
					</svg>
				{:else if appState.theme === 'dark'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
			<button
				aria-label="Toggle Menu"
				class="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-gray-300 md:hidden dark:text-white dark:hover:bg-gray-800"
				onclick={() => {
					menuOpen = !menuOpen;
				}}
			>
				{#if menuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
	{#if menuOpen}
		<div class="md:hidden">
			<div class="mb-5 flex flex-col items-center gap-5">
				{#each navLinks as link}
					<a
						class={`hover:text-primary text-center text-sm font-medium transition-colors md:hidden ${isActiveRoute(link.href) ? 'text-primary' : 'text-gray dark:text-white'}`}
						href={link.href}>{link.label}</a
					>
				{/each}
			</div>
			<div
				class="border-border dark:border-border-dark flex w-full flex-row items-center justify-center gap-2 border-t px-4 py-2 text-black dark:text-white"
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
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<input class="w-full focus:outline-none" type="text" name="search" id="search" />
			</div>
		</div>
	{/if}
</nav>
