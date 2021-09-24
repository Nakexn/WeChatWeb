import { routes } from './route/index.js';
import { addClass, removeClass } from './util/index.js';

const app = document.querySelector('#app');

let pathname = window.location.pathname;

let isProd = pathname.indexOf('WeChatWeb') >= 0;
let currentRoute, replaceUrl;

if (isProd) {
  pathname = pathname.replace('/WeChatWeb', '');
}
if (pathname === '/') {
  pathname = '/wechat';
}

currentRoute = pathname;
replaceUrl = (isProd ? '/WeChatWeb' : '') + pathname;

let Page;

if (currentRoute in routes) {
  Page = routes[currentRoute];
} else {
  currentRoute = '/wechat';
  Page = routes[currentRoute];
  replaceUrl = (isProd ? '/WeChatWeb' : '') + '/wechat';
}

window.currentRoute = currentRoute;
window.pageStack = [Page];

history.replaceState(null, null, replaceUrl);

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
