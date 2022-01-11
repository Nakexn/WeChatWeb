import Page from '../../components/Page.js';
import Tabs from './tabs/index.js';
// import config from './config.js';
// import listData from './mock.js';

class Home extends Page {
  constructor() {
    super();
    this._init();
  }
  _init() {
    this.pageStack = [];
    const $tabs = new Tabs();
    this.createPage($tabs.$el);
  }
  createPage(el) {
    let depth = 1;
    let Matched = $router.route.matched[depth].component;
    const container = document.createElement('div');
    container.classList.add('page-wrapper');
    container.dataset.pageId = this.uid++;
    let view = el.querySelector('router-view');
    let viewEl = new Matched().$el;
    view.parentNode.replaceChild(viewEl, view);
    container.appendChild(el);
    this.$el = container;
  }
}

export default Home;
