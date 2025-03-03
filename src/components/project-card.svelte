<script lang="ts">
	interface Tag {
		name: string;
		color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'orange';
	}

	interface ProjectCardProps {
		title: string;
		description: string;
		tags: Tag[];
		slug: string;
	}

	let { title, description, tags, slug }: ProjectCardProps = $props();
</script>

<a href={`/projects/${slug}`} class="block h-full">
	<div
		class="border-border dark:border-border-dark flex h-full w-full flex-col
                overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md"
	>
		<div class="flex-grow p-4 sm:p-6">
			<h2 class="mb-2 line-clamp-2 text-base font-bold sm:text-lg md:text-xl">
				{title}
			</h2>
			<p class="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
				{description}
			</p>
		</div>

		<div class="p-4 pt-0 sm:px-6 sm:pt-0">
			<div class="flex flex-wrap gap-1">
				{#each tags as tag}
					<p class={`tag tag-${tag.color}`}>{tag.name}</p>
				{/each}
			</div>
		</div>
	</div>
</a>
