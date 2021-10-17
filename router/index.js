import { addClass, removeClass } from '../util/index.js';
const ANIMATE_IN = 'translate-x-100x';
const ANIMATE_OUT = 'translate-x-minus-100x';
const ANIMATE_TIME = 500;

class Router {
  constructor(config) {
    this._init(config);
  }
  _init({ routes, base, app } = config) {
    this.routes = routes || {};
    this.base = window.location.origin;
    if (base && typeof base === 'string') {
      this.base += base;
    }
    this.pageStack = [];
    this.len = 0;
    this.$app = app;
    this.currentRoute = '';
    window.addEventListener('popstate', e => {
      if (this.len <= 1) return;
      const $el = this.pageStack.pop();
      const $prev = this.pageStack[this.pageStack.length - 1];
      this.len--;
      addClass($el, ANIMATE_IN);
      removeClass($prev, ANIMATE_OUT);
      setTimeout(() => {
        removeClass($el, ANIMATE_IN);
        this.$app.removeChild($el);
      }, ANIMATE_TIME);
    });
  }
  navigateTo(path) {
    if (path === '/') {
      history.replaceState(null, null, this.base);
    } else {
      history.pushState(null, null, this.base + '/#' + path);
    }
    this.currentRoute = path;
    const Page = this.routes[path];
    const page = new Page();
    const $el = page.$el;
    this.pageStack.push($el);
    this.len++;
    if (this.len > 1) {
      const $prev = this.pageStack[this.len - 2];
      addClass($el, ANIMATE_IN);
      addClass($prev, ANIMATE_OUT);
      setTimeout(() => {
        removeClass($el, ANIMATE_IN);
      }, 0);
    }
    this.$app.appendChild($el);
  }
  switchTab(path) {
    if (path === this.currentRoute) return;
    if (path === '/') {
      history.replaceState(null, null, this.base);
    } else {
      history.replaceState(null, null, this.base + '/#' + path);
    }
    this.currentRoute = path;
    this.pageStack = [];
    this.len = 0;
    const Page = this.routes[path];
    const page = new Page();
    const $el = page.$el;
    this.pageStack = [$el];
    this.len++;
    this.$app.innerHTML = '';
    this.$app.appendChild($el);
  }
  navigateBack(delta) {
    if (delta && typeof delta === 'number' && delta < 0) {
      history.go(number);
    } else {
      history.go(-1);
    }
  }
}

export default Router;
