import { createRouter,createWebHistory } from 'vue-router';
import DasboardPage from "../components/Dashboard/DashboardPage.vue";
import LoginPage from '@/components/Login/LoginPage.vue';
import SignupPage from '@/components/Signup/SignupPage.vue';
const routes=[
{
    path:"/login",
    component:LoginPage
},
{
    path:"/signup",
    component:SignupPage
},
{
    path:"/dashboard",
    component:DasboardPage
},
{
    path:"/",
    redirect:"/login"
}

]
const router=createRouter({
    history:createWebHistory(),
    routes
})
// router.beforeEach((to,from,next)=>{

// })
export default router;