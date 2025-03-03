<script lang="ts">
	interface Tag {
		name: string;
		color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'orange';
	}

	interface PostCardProps {
		title: string;
		imageUrl?: string;
		alt: string;
		tags: Tag[];
		date: string;
		slug: string;
	}

	let { imageUrl = '/placeholder.svg', title, alt, tags, date, slug }: PostCardProps = $props();
</script>

<a href={`/blog/${slug}`} class="block h-full">
	<div
		class="border-border dark:border-border-dark flex h-full w-full flex-col overflow-hidden rounded-lg border shadow-sm"
	>
		<div class="flex-grow">
			<div class="h-48 w-full overflow-hidden sm:h-56 md:h-40 lg:h-48">
				<img src={imageUrl} {alt} class="h-full w-full object-cover" />
			</div>

			<div class="p-4">
				<h2 class="mb-2 line-clamp-2 text-base font-bold md:text-lg">
					{title}
				</h2>
				<div class="flex flex-wrap gap-1">
					{#each tags as tag}
						<p class={`tag tag-${tag.color}`}>{tag.name}</p>
					{/each}
				</div>
			</div>
		</div>
		<div class="bg-primary flex items-center gap-2 px-4 py-2 text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
				/>
			</svg>
			<p class="text-sm">{date}</p>
		</div>
	</div>
</a>

