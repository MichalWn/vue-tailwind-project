<template>
	<div
		class="relative h-screen"
		:style="{
			backgroundImage: `url(${require('@/assets/trail.png')})`,
			backgroundSize: '40%',
			backgroundPosition: 'right top',
			backgroundRepeat: 'no-repeat',
		}"
	>
		<AppNavbar />
		<div>
			<RouterView />
		</div>
	</div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";

export default {
	name: "App",
	components: {
		AppNavbar,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
