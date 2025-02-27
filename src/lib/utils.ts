import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
import { i18n } from '$lib/i18n';
import { page } from '$app/state';
import { goto } from '$app/navigation';
import { appState } from '$lib/state.svelte.js';

export function switchToLanguage(newLanguage: AvailableLanguageTag) {
	const canonicalPath = i18n.route(page.url.pathname);
	const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
	goto(localisedPath);
}

export function fontClass() {
	if (appState.lang === 'en') {
		return 'lang-en';
	} else if (appState.lang === 'fa') {
		return 'lang-fa';
	}
}

export function isActiveRoute(url: string) {
	const currentPath = page.url.pathname;
	if (url === '/' && currentPath === '/fa') return true;
	return currentPath.endsWith(url);
}
