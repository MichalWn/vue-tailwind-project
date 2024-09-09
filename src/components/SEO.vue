<template>
	<v-container fluid>
		<div class="flex bg-zinc-900 w-full h-96 justify-center items-center">
			<div class="flex-auto w-1/3 m-4 p-4">
				<h1 class="text-l text-left text-white">
					ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA
					COMMODO.
				</h1>
				<p class="text-left mt-4 text-sm text-white">
					Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
					egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
					venenatis eros ipsum ac arcu. Vestibulum et [...]
				</p>
				<div class="text-left text-white">
					<button @click="toggleText(0)" class="mt-2 border-b">
						Rozwiń <font-awesome-icon icon="chevron-down" class="ml-2" />
					</button>

					<h1 v-if="expanded[0]" class="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						dolorum rem deserunt provident nulla ab, omnis minima adipisci
						consectetur, quas blanditiis magnam et. Incidunt ut perferendis
						voluptates cumque dolor deleniti!
					</h1>
				</div>
			</div>

			<div class="flex-auto w-1/3 m-4 p-4 text-left">
				<h1 class="text-l text-white">
					ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA
					COMMODO.
				</h1>
				<p class="text-left text-sm mt-4 text-white">
					Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec
					egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
					venenatis eros ipsum ac arcu. Vestibulum et [...]
				</p>
				<div class="text-left text-white">
					<button @click="toggleText(1)" class="mt-2 border-b">
						Rozwiń <font-awesome-icon icon="chevron-down" class="ml-2" />
					</button>

					<h1 v-if="expanded[1]" class="text-white">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis in
						incidunt error. Nesciunt adipisci quaerat facere excepturi molestias
						eius sit itaque inventore, sapiente expedita laborum eligendi vel
						esse saepe molestiae!
					</h1>
				</div>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			expanded: [false, false],
		};
	},
	methods: {
		toggleText(index) {
			this.expanded[index] = !this.expanded[index];
		},
	},
};
</script>
