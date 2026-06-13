<svelte:head>
	<title>404 - Content Not Found</title>
</svelte:head>

<div class="min-h-screen bg-black text-white flex items-center justify-center px-6">
	<div class="text-center">
		<div class="inline-flex text-4xl font-extrabold mb-8">
			<span class="px-3 py-1 bg-black border border-zinc-700 rounded-l-md">
				Oops
			</span>
			<span
				class="px-3 py-1 bg-primary-500 text-black rounded-r-md"
			>
				404
			</span>
		</div>

		<h1 class="text-5xl font-black mb-4">
			This content has vanished.
		</h1>

		<p class="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
			The page you requested was removed, renamed, or never existed.
		</p>

		<div class="flex gap-4 justify-center">
			<a
				href="/"
				class="bg-primary-500 hover:bg-primary-400 text-black font-bold px-6 py-3 rounded"
			>
				Return Home
			</a>

			<button
				class="border border-zinc-700 px-6 py-3 rounded hover:bg-zinc-900"
				onclick={()=> history.back()}
			>
				Go Back
			</button>
		</div>
	</div>
</div>