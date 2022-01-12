import Component from '../../../components/Componet.js';
import { removeSiblingClass } from '../../../util/index.js';

class Index extends Component {
  constructor() {
    super();
  }

  render(createDom) {
    const state = this.state;
    const template = state => `
      <div class="tab-panel">
        <router-view></router-view>
      </div>
      <ul class="home-tab-bar">
        <li class="item">
          <a class="link router-link" data-link-to="/home/wechat" data-link-type="switch" href="javascript:;">
            <i class="icon iconfont we-interactive"></i>
            <span class="title">微信</span>
          </a>
        </li>
        <li class="item">
          <a class="link router-link" data-link-to="/home/maillist" data-link-type="switch" href="javascript:;">
            <i class="icon iconfont we-addressbook"></i>
            <span class="title">通讯录</span>
          </a>
        </li>
        <li class="item">
          <a class="link router-link" data-link-to="/home/find" data-link-type="switch" href="javascript:;">
            <i class="icon iconfont we-integral"></i>
            <span class="title">发现</span>
          </a>
        </li>
        <li class="item">
          <a class="link router-link" data-link-to="/home/me" data-link-type="switch" href="javascript:;">
            <i class="icon iconfont we-mine"></i>
            <span class="title">我</span>
          </a>
        </li>
      </ul>`;
    this.template = template(state);
    createDom(this.template);
    this.$el.classList.add('container');
  }
  mount() {
    const $el = this.$el;
    const $tabs = $el.querySelectorAll('.home-tab-bar .router-link');
    $tabs.forEach(item => {
      if (item.dataset.linkTo === $router.route.route) {
        item.classList.add('selected');
      }
      item.addEventListener('click', e => {
        e.preventDefault();
        removeSiblingClass(item, 'selected');
        item.classList.add('selected');
        $router.switchTab(item.dataset.linkTo);
      });
    });
  }
}

export default Index;
