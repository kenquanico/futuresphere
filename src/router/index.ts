import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FeaturesPage from '../views/FeaturesPage.vue';
import AboutPage from '../views/AboutPage.vue';
import PricingPage from '../views/PricingPage.vue';
import BlogsPage from '../views/BlogsPage.vue';
import BlogSinglePage from '../views/BlogSinglePage.vue';
import CareersPage from '../views/CareersPage.vue';
import CareerSinglePage from '../views/CareerSinglePage.vue';
import ContactPage from '../views/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomePage },
    { path: '/features', component: FeaturesPage },
    { path: '/about', component: AboutPage },
    { path: '/pricing', component: PricingPage },
    { path: '/blogs', component: BlogsPage },
    { path: '/blogs/:slug', component: BlogSinglePage },
    { path: '/careers', component: CareersPage },
    { path: '/careers/:slug', component: CareerSinglePage },
    { path: '/contact', component: ContactPage },
  ],
});

export default router;
