import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/login/Login";
import Verification from "@/components/verification/Verification";
import Home from "@/components/home/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/verification/:regtok",
      name: "Verification",
      component: Verification
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});
