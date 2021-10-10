import { addClass, removeClass } from '../util/index.js';
const ANIMATE_IN = 'container-in';

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
  }
  navigateTo(path) {
    const Page = this.routes[path];
    const page = new Page();
    const $el = page.$el;
    this.pageStack.push($el);
    this.len++;
    addClass($el, ANIMATE_IN);
    this.$app.appendChild($el);
    setTimeout(() => {
      removeClass($el, ANIMATE_IN);
    }, 0);
  }
  switchTab(path) {}
  navigateBack(delta) {}
}

export default Router;
