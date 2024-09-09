<template>
	<nav class="">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex-shrink-0">
					<a href="/">
						<img src="@/assets/logo.png" alt="Logo" class="h-10" />
					</a>
				</div>

				<div class="hidden sm:flex sm:space-x-6 flex-grow justify-center">
					<router-link
						to="/gallery"
						class="text-gray-500 hover:text-black text-sm font-medium"
						>Galeria zdjęć</router-link
					>
					<router-link
						to="/faq"
						class="text-gray-500 hover:text-black text-sm font-medium"
						>FaQ</router-link
					>
				</div>

				<div class="hidden sm:flex">
					<router-link
						to="/contact"
						class="bg-blue-500 text-white px-4 py-2 rounded-lg"
						>Zadzwoń do nas</router-link
					>
				</div>

				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div
			:class="{ block: isOpen, hidden: !isOpen }"
			class="sm:hidden"
			id="mobile-menu"
		>
			<div class="px-2 pt-2 pb-3 space-y-1">
				<router-link
					to="/gallery"
					class="block text-gray-500 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-base font-medium"
					>Galeria zdjęć</router-link
				>
				<router-link
					to="/faq"
					class="block text-gray-500 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-base font-medium"
					>FaQ</router-link
				>
				<router-link
					to="/contact"
					class="block text-gray-500 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-base font-medium"
					>Zadzwoń do nas</router-link
				>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false,
		};
	},
};
</script>
