// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import FaQPage from "@/pages/FaQPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
	{
		name: "HomePage",
		path: "/",
		component: HomePage,
	},
	{
		name: "GalleryPage",
		path: "/gallery",
		component: GalleryPage,
	},
	{
		name: "FaQPage",
		path: "/faq",
		component: FaQPage,
	},
	{
		name: "ContactPage",
		path: "/contact",
		component: ContactPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkActiveClass: "active-link",
	routes,
});

export default router;
