<template>
	
	<HeadersBlock></HeadersBlock>
	<SwiperCars></SwiperCars>
</template>

<script>
import HeadersBlock from '@/components/HeadersBlock.vue';
import SwiperCars from '@/components/SwiperCars.vue';



export default {
	data() {
		return {
			tittle: "GaleryPage content",
		};
	},
	components: {HeadersBlock,SwiperCars},
};
</script>

<style></style>
