import Main from "@/pages/Main.vue";
import Quote from "@/pages/Quote.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/quote/:id',
        component: Quote
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;