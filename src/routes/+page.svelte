<script lang="ts">
	import { TOOLS } from '$lib/data/tool-list';

	const games = Array.from(
		new Set(TOOLS.map(tool => tool.game))
	);
</script>

<div class="space-y-8 mx-4 mt-2">
	{#each games as game}
		<section>
			<h2 class="mb-3 text-xl font-semibold text-neutral-200">
				{game}
			</h2>

			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each TOOLS.filter(tool => tool.game === game) as tool}
					<a
						href={tool.href}
						class="
							group
							rounded-xl
							border border-neutral-800
							bg-neutral-900
							p-5
							transition
							hocus:border-primary-500
							hocus:ring-1
							hocus:ring-primary-500
						"
					>
						<div class="flex items-center justify-between">
							<h3
								class="
									font-medium
									text-neutral-100
									transition
									group-hocus:text-primary-400
								"
							>
								{tool.title}
							</h3>

							<span
								class="
									text-neutral-600
									transition
									group-hocus:text-primary-400
								"
							>
								→
							</span>
						</div>

						{#if tool.description}
							<p class="mt-2 text-sm text-neutral-500">
								{tool.description}
							</p>
						{/if}
					</a>
				{/each}
			</div>
		</section>
	{/each}
</div>