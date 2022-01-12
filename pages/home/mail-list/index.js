import Componet from '../../../components/Componet.js';
import config from './config.js';
import listData from './mock.js';

class AddressBook extends Componet {
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
      </div>
      <div class="footer">
        <ul class="tab-bar">
          <li class="item">
            <a class="link router-link" data-link-to="/" href="javascript:;">
              <i class="icon iconfont we-interactive"></i>
              <span class="title">微信</span>
            </a>
          </li>
          <li class="item">
            <a class="link router-link selected" data-link-to="/address_book" href="javascript:;">
              <i class="icon iconfont we-addressbook_fill"></i>
              <span class="title">通讯录</span>
            </a>
          </li>
          <li class="item">
            <a class="link router-link" data-link-to="/find" href="javascript:;">
              <i class="icon iconfont we-integral"></i>
              <span class="title">发现</span>
            </a>
          </li>
          <li class="item">
            <a class="link router-link" data-link-to="/me" href="javascript:;">
              <i class="icon iconfont we-mine"></i>
              <span class="title">我</span>
            </a>
          </li>
        </ul>
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

export default AddressBook;
