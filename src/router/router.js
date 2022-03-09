import MainPage from "@/pages/MainPage.vue";
import QuotePage from "@/pages/QuotePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/quote/:id',
        component: QuotePage
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;