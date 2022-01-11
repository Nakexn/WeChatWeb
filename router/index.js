import { addClass, removeClass } from '../util/index.js';
const hasDocument = 'undefined' !== typeof document;
const clickEvent = hasDocument && document.ontouchstart ? 'touchstart' : 'click';

const ANIMATE_IN = 'translate-x-100x';
const ANIMATE_OUT = 'translate-x-minus-100x';
const ANIMATE_TIME = 500;

class Router {
  constructor(options) {
    this._init(options);
  }

  _init(options) {
    this.el = options.el ? options.el : null;
    this.routes = options.routes ? options.routes : {};
    this.pageStack = [];
    this.len = 0;
    this.current = '';

    this._base = '';

    this.hanldeClick = this.hanldeClick.bind(this);
    this._onpopstate = this._onpopstate.bind(this);
  }

  base(path) {
    if (typeof path === 'string') {
      this._base += path;
    }
  }

  _getBase() {
    const base = this._base;
    return base;
  }

  hanldeClick(e) {}

  _onpopstate(e) {
    if (e.state) {
      const pageInfo = this.pageStack.find(item => item.path === e.state.path);
      const pageIndex = this.pageStack.findIndex(item => item.path === e.state.path);
      if (pageInfo && pageIndex > -1) {
        if (pageIndex === this.len - 2) {
          const prevId = this.pageStack[pageIndex + 1].pageId;
          const $prev = document.querySelector(`div[data-page-id='${prevId}']`);
          const elId = this.pageStack[pageIndex].pageId;
          const $el = document.querySelector(`div[data-page-id='${elId}']`);
          this.len--;
          this.pageStack.pop();
          addClass($prev, ANIMATE_IN);
          removeClass($el, ANIMATE_OUT);
          setTimeout(() => {
            removeClass($prev, ANIMATE_IN);
            this.el.removeChild($prev);
          }, ANIMATE_TIME);
        }
      } else {
        const path = e.state.path;
        this.navigateTo(path, true);
      }
    } else {
      this.start();
    }
  }

  configure() {
    window.addEventListener('popstate', this._onpopstate, false);
    window.document.addEventListener(clickEvent, this.clickHandler, false);
  }

  start() {
    this.configure();
    this._running = true;

    let url;
    let loc = window.location;

    url = loc.pathname + loc.search + loc.hash;

    this.navigateTo(url, true);
  }

  navigateTo(path, init = false) {
    const pageBase = this._getBase();
    const routePath = path.replace(pageBase, '').replace('/#', '');
    let route = new Route(routePath, this);
    this.route = route;

    let ctx = new Context(route, this);
    this.current = ctx.path;
    this.params = ctx.params;

    let toArr = route.toArr;
    let Page;
    if (toArr.length === 0) {
      throw new Error('路径不能为空');
    } else {
      Page = this.routes.find(item => item.path === toArr[0]).component;
    }

    if (init) {
      window.history.replaceState(ctx.state, ctx.title, ctx.path);
    } else {
      window.history.pushState(ctx.state, ctx.title, ctx.path);
    }

    this.len++;
    const page = new Page();
    const $el = page.$el;
    this.pageStack.push({
      path: ctx.path,
      pageId: $el.dataset.pageId
    });

    this.el.appendChild($el);

    if (this.len > 1) {
      const prevInfo = this.pageStack[this.len - 2];
      const $prev = document.querySelector(`div[data-page-id='${prevInfo.pageId}']`);
      addClass($prev, ANIMATE_OUT);
      addClass($el, ANIMATE_IN);
      setTimeout(() => {
        removeClass($el, ANIMATE_IN);
      }, 0);
    }
  }

  switchTab(path) {
    if (this.route.route === path) return;
    const pageBase = this._getBase();
    const routePath = path.replace(pageBase + '/#', '');
    let route = new Route(routePath, this);
    this.route = route;

    let ctx = new Context(route, this);
    this.current = ctx.path;
    this.params = ctx.params;

    let toArr = route.toArr;

    if (toArr.length > 1) {
      console.log(route.matched);
    }
  }

  navigateBack() {
    history.back();
  }
}

class Context {
  constructor(routeInst, router) {
    const _router = router;
    const pageBase = _router._getBase();
    let path = pageBase + '/#' + routeInst.toArr.reduce((total, current) => total + current, '');

    if (routeInst.search) path += routeInst.search;

    this.path = path;
    this.title = null;
    this.state = {};
    this.state.path = path;
  }
}

class Route {
  constructor(path, router) {
    this.route = path.split('?')[0];
    let route, pathname, search, to;
    let pathArr = path.split('?');
    pathname = pathArr[0];
    search = pathArr[1] ? pathArr[1] : '';
    if (search) search = '?' + search;
    this.search = search;

    if (pathname === '/') {
      route = router.routes.find(item => item.path === path);
      if (route.redirect) {
        to = route.redirect;
      }
    } else {
      to = pathname;
    }

    let toArr = to.split('/');
    toArr.shift();
    this.toArr = toArr.map(item => '/' + item);
    this.page = this.toArr[0];
    let len = toArr.length;
    let matched = [];
    let currentRoute = this.toArr[0];
    let matchedRoute = router.routes.find(item => item.path === currentRoute);
    matched.push({
      path: currentRoute,
      component: matchedRoute.component
    });
    if (len > 1) {
      let tempRoute = matchedRoute.children;
      for (let i = 1; i < len; i++) {
        tempRoute = tempRoute.find(item => item.path === this.toArr[i]);
        matched.push({
          path: tempRoute.path,
          component: tempRoute.component
        });
        if (tempRoute.children) {
          tempRoute = tempRoute.children;
        }
      }
    }
    this.matched = matched;

    let params = {};

    search &&
      search
        .replace('?', '')
        .split('&')
        .forEach(item => {
          const paramArr = item.split('=');
          const key = paramArr[0];
          const value = paramArr[1];
          params[key] = value;
        });

    this.search = search;
    this.params = params ? params : '';
  }
}

export default Router;
