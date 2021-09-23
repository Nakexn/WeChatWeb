import { routes, baseUrl } from './route/index.js';
import { addClass, removeClass } from './util/index.js';

const app = document.querySelector('#app');

let currentRoute = window.location.pathname.replace('/WeChatWeb', '');
if (currentRoute === '/') {
  currentRoute = '/wechat';
}

let Page = routes[currentRoute];
window.currentRoute = currentRoute;
window.pageStack = [Page];

history.replaceState(null, null, currentRoute);

app.appendChild(Page);

window.addEventListener('popstate', e => {
  if (window.moving) {
    return;
  } else {
    window.moving = true;
    const currentPage = pageStack.pop();
    const $el = pageStack[pageStack.length - 1];
    app.insertBefore($el, currentPage);
    setTimeout(() => {
      addClass(currentPage, 'container-out');
    }, 0);
    setTimeout(() => {
      removeClass(currentPage, 'container-out');
      app.removeChild(currentPage);
      window.moving = false;
    }, 500);
  }
});
