import Page from '../../components/Page.js';
import config from './config.js';
import listData from './mock.js';

class Index extends Page {
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
      <div class="content">
        <ul class="chat-list">
          ${state.listData
            .map(
              data => `
              <li class="chat-item">
                <a class="link router-link">
                  <div class="avatar">
                    <img src="../../images/avatar.jpg" alt="张三" />
                  </div>
                  <div class="main">
                    <div class="first-column">
                      <div class="name ellipsis">${data.name}</div>
                      <div class="message ellipsis">${data.message}</div>
                    </div>
                    <div class="second-column">
                      <div class="time">${data.time}</div>
                      <div class="status"></div>
                    </div>
                  </div>
                </a>
              </li>`
            )
            .join('')}
        </ul>
      </div>
      <div class="footer">
        <ul class="tab-bar">
          <li class="item">
            <a class="link selected" href="javascript:;">
              <i class="icon iconfont we-interactive_fill"></i>
              <span class="title">微信</span>
            </a>
          </li>
          <li class="item">
            <a class="link" href="javascript:;">
              <i class="icon iconfont we-addressbook"></i>
              <span class="title">通讯录</span>
            </a>
          </li>
          <li class="item">
            <a class="link" href="javascript:;">
              <i class="icon iconfont we-integral"></i>
              <span class="title">发现</span>
            </a>
          </li>
          <li class="item">
            <a class="link" href="javascript:;">
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
    const $list = $el.querySelectorAll('.chat-list .router-link');
    $list.forEach(item => {
      item.addEventListener('click', e => {
        $router.navigateTo('/chat');
      });
    });

    //绑定事件
  }
}

export default Index;