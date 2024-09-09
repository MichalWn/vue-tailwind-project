<template>
	<v-container fluid>
		<div>
			<HeroPage></HeroPage>
			<HeadersBlock></HeadersBlock>
			<SwiperCars></SwiperCars>
			<SEO></SEO>
			<FooterCars></FooterCars>
		</div>
	</v-container>
</template>

<script>
import FooterCars from "@/components/FooterCars.vue";
import HeadersBlock from "@/components/HeadersBlock.vue";
import HeroPage from "@/components/HeroPage.vue";
import SEO from "@/components/SEO.vue";
import SwiperCars from "@/components/SwiperCars.vue";

export default {
	data() {
		return {
			tittle: "HomePage content",
		};
	},
	components: { HeroPage, HeadersBlock, SwiperCars, SEO, FooterCars },
};
</script>

<style></style>
