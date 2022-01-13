import Componet from '../../../components/Componet.js';
import config from './config.js';
import listData from './mock.js';

class Find extends Componet {
  constructor() {
    super();
  }
  beforeRender() {
    this.state = {
      title: config.title,
      navBarIcons: config.navBarIcons,
      listData: listData
    };
  }
  render(createDom) {
    const state = this.state;
    const template = `
      <div class="header">
        <p class="title">${state.title}</p>
        <span class="right">
          ${state.navBarIcons
            .map(
              icon => `
              <a class="link icon-button-${icon}" href="javascript:;">
                <i class="icon iconfont we-${icon}"></i>
              </a>`
            )
            .join('')}
        </span>
      </div>
      <div class="content" style="height: 100%; background: #fff;">
      </div>`;
    this.template = template;
    createDom(template);
  }
  mount() {
    const $el = this.$el;

    const $tabs = $el.querySelectorAll('.tab-bar .router-link');
    $tabs.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        $router.switchTab(item.dataset.linkTo);
      });
    });
  }
}

export default Find;
