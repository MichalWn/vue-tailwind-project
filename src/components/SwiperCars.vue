<template>
  <div class="m-8">
	<swiper
		:slidesPerView="3"
		:spaceBetween="30"
		:pagination="{
			clickable: true,
		}"
		:modules="modules"
		class="mySwiper"
	>
		<swiper-slide><img src="@/assets/redcar.png" /></swiper-slide>
		<swiper-slide><img src="@/assets/blackcar.png" /></swiper-slide
		><swiper-slide><img src="@/assets/frontcar.png" /></swiper-slide>
		<swiper-slide><img src="@/assets/redcar.png" /></swiper-slide
		><swiper-slide><img src="@/assets/blackcar.png" /></swiper-slide>
		<swiper-slide><img src="@/assets/frontcar.png" /></swiper-slide
		><swiper-slide>Slide 7</swiper-slide> <swiper-slide>Slide 8</swiper-slide
		><swiper-slide>Slide 9</swiper-slide>
	</swiper>
</div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination],
		};
	},
};
</script>

<style scoped>
.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

.swiper-slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
