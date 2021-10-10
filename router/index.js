import { addClass, removeClass } from '../util/index.js';
const ANIMATE_IN = 'container-x-100';
const ANIMATE_OUT = 'container-x-minus-100';
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
    window.addEventListener('popstate', e => {
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
      history.replaceState(null, null, '/');
    } else {
      history.pushState(null, null, '/#' + path);
    }
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
  switchTab(path) {}
  navigateBack(delta) {}
}

export default Router;
