<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { appState } from '$lib/state.svelte';
	import { fly } from 'svelte/transition';
	import PostCard from '../components/post-card.svelte';
	import ProjectCard from '../components/project-card.svelte';

	let mounted: boolean = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="flex h-[calc(100vh-65px)] w-full flex-col items-center justify-center px-4 py-12">
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

<section class="mb-16">
	<h1 class="mb-6 text-2xl font-bold md:text-3xl">{m.recent_posts()}</h1>
	<div class="grid w-full gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
		<PostCard
			imageUrl="https://www.globalsign.com/application/files/6117/1861/9663/Enabling_Secure_Innovation_for_DevOps_GlobalSign.jpg"
			alt={m.placeholder_post_alt()}
			title={m.placeholder_project_title()}
			date={m.placeholder_post_date()}
			tags={[
				{ name: 'DevOps', color: 'blue' },
				{ name: appState.lang === 'fa' ? 'امنیت' : 'Security', color: 'red' },
				{ name: 'Automation', color: 'yellow' }
			]}
			slug="enhancing-devops-sec-vuln-scan"
		/>
		<PostCard
			imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iqlnR_QsiRADN-IPz3N7OwF-z9tbd7rB1Q&s"
			alt={m.placeholder_post_alt()}
			title={m.placeholder_post_title()}
			date={m.placeholder_post_date()}
			tags={[
				{ name: 'DevOps', color: 'blue' },
				{ name: appState.lang === 'fa' ? 'امنیت' : 'Security', color: 'red' },
				{ name: 'Automation', color: 'yellow' }
			]}
			slug="enhancing-devops-sec-vuln-scan"
		/>
		<PostCard
			imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0kET0f-IDSZFYxnDQClJwvoxrxgT7ZNcEw&s"
			alt={m.placeholder_post_alt()}
			title={m.placeholder_post_title()}
			date={m.placeholder_post_date()}
			tags={[
				{ name: 'DevOps', color: 'blue' },
				{ name: appState.lang === 'fa' ? 'امنیت' : 'Security', color: 'red' },
				{ name: 'Automation', color: 'yellow' }
			]}
			slug="enhancing-devops-sec-vuln-scan"
		/>
	</div>
</section>

<section class="mb-16">
	<h1 class="mb-6 text-2xl font-bold md:text-3xl">{m.projects_title()}</h1>
	<div class="grid w-full items-stretch gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
		<ProjectCard
			title={m.placeholder_project_title()}
			description={m.placeholder_project_description()}
			tags={[
				{ name: appState.lang === 'fa' ? 'کوبرنتیز' : 'Kubernetes', color: 'blue' },
				{ name: appState.lang === 'fa' ? 'عدم اعتماد' : 'Zero Trust', color: 'red' },
				{ name: 'DevOps', color: 'orange' }
			]}
			slug="zero-trust-k8s"
		/>
		<ProjectCard
			title={m.placeholder_project_title()}
			description={m.placeholder_project_description()}
			tags={[
				{ name: appState.lang === 'fa' ? 'کوبرنتیز' : 'Kubernetes', color: 'blue' },
				{ name: appState.lang === 'fa' ? 'عدم اعتماد' : 'Zero Trust', color: 'red' },
				{ name: 'DevOps', color: 'orange' }
			]}
			slug="zero-trust-k8s"
		/>
		<ProjectCard
			title={m.placeholder_project_title()}
			description={m.placeholder_project_description()}
			tags={[
				{ name: appState.lang === 'fa' ? 'کوبرنتیز' : 'Kubernetes', color: 'blue' },
				{ name: appState.lang === 'fa' ? 'عدم اعتماد' : 'Zero Trust', color: 'red' },
				{ name: 'DevOps', color: 'orange' }
			]}
			slug="zero-trust-k8s"
		/>
	</div>
</section>
