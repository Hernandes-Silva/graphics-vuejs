import Home from './views/Home.vue'
import CreateOrder from './views/CreateOrder.vue'
import { createRouter, createWebHistory } from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: "/",
          name:'Home',
          component: Home,
        },
        {
          path: "/order/create/",
          name:'CreateOrder',
          component: CreateOrder,
        },
    ]
})
export default router;