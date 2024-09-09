<template>
	<div
		class="relative h-screen"
		:style="{
			backgroundImage: `url(${require('@/assets/cars.png')})`,
			backgroundSize: '60%',
			backgroundPosition: 'right center',
			backgroundRepeat: 'no-repeat',
		}"
	>
		<div
			class="absolute top-0 left-0 w-3/5 h-4/5 mx-20 p-20 bg-opacity-80 flex justify-center"
		>
			<div class="text-left">
				<h1 class="text-6xl font-bold text-gray-900 leading-tight">
					Sprzedajemy samochody z Europy
				</h1>
				<p class="text-lg text-gray-700 mt-4">
					Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
				</p>
				<div class="mt-6 space-x-4">
					<router-link
						to="/gallery"
						class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
					>
						Zobacz zdjęcia
					</router-link>
					<router-link
						to="/contact"
						class="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white"
					>
						Zadzwoń do nas
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tittle: "Home Page content",
		};
	},
	components: {},
};
</script>

<style></style>
