import Vue from "vue";
import Router from "vue-router";
import GridView from "../components/grid/consumer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "GridView",
      component: GridView
    }
  ]
});
