import Page from '../../components/Page.js';
import config from './config.js';
import chatDetail from './mock.js';

class Index extends Page {
  constructor() {
    super();
  }
  beforeRender() {
    this.state = {
      title: chatDetail.title,
      navBarIcons: config.navBarIcons,
      chatDetail: chatDetail
    };
  }
  render(createDom) {
    const state = this.state;
    const template = `
      <div class="header">
        ${
          $router.len > 0
            ? `<span class="left">
          <a class="link" href="javascript:history.go(-1)">
            <i class="icon iconfont we-return"></i>
          </a>
        </span>`
            : ''
        }
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
        <div class="operating-area">
          <div class="left">
            <a class="link" href="javascript:;">
              <i class="icon iconfont we-translation"></i>
            </a>
          </div>
          <div class="input-box">
            <input class="input" type="text" name="" id="" />
          </div>
          <div class="right">
            <a class="link" href="javascript:;">
              <i class="icon iconfont we-emoji"></i>
            </a>
            <a class="link" href="javascript:;">
              <i class="icon iconfont we-addition"></i>
            </a>
          </div>
        </div>
      </div>`;
    this.template = template;
    createDom(template);
  }
  mount() {
    const $el = this.$el;
    //绑定事件
  }
}

export default Index;
