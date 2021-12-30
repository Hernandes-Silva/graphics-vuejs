import Home from './views/Home.vue'
import CreateOrder from './views/CreateOrder.vue'
import { createRouter, createWebHistory } from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/contact",
          component: CreateOrder,
        },
    ]
})
export default router;