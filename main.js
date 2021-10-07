import Router from "./router/index.js";
import routes from "./router/routes.js";
import Page from "./components/Page.js";

const app = document.querySelector("#app");
const router = new Router({
  routes,
});
