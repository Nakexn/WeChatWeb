import Router from './router/index.js';
import routes from './router/routes.js';

const el = document.querySelector('#app');
const router = new Router({ el, routes });

window.$router = router;

router.base('/WeChatWeb');
router.start();
