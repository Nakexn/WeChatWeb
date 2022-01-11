import Component from '../../../components/Componet.js';

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
          <a class="link router-link selected" data-link-to="/home/wechat" data-link-type="switch" href="javascript:;">
            <i class="icon iconfont we-interactive_fill"></i>
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
      item.addEventListener('click', e => {
        e.preventDefault();
        $router.switchTab(item.dataset.linkTo);
      });
    });

    //绑定事件
  }
}

export default Index;
