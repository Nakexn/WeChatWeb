import Page from '../../components/Page.js';
import config from './config.js';
import listData from './mock.js';

class Index extends Page {
  constructor() {
    super({
      state: {
        title: config.title,
        navBarIcons: config.navBarIcons,
        listData: ''
      }
    });
  }
  beforeRender() {
    setTimeout(() => {
      this.setState({
        listData: listData
      });
    }, 2000);
  }
  render(createDom) {
    const state = this.state;
    const template = state => `
      <div class="header">
        ${
          $router.len > 1
            ? `<span class="left">
          <a class="link go-back" href="javascript:;">
            <i class="icon iconfont we-return"></i>
          </a>
        </span>`
            : ''
        }
        <p class="title">${state.title}</p>
        <span class="right">
          ${
            state.navBarIcons
              ? state.navBarIcons
                  .map(
                    icon => `
              <a class="link icon-button-${icon}" href="javascript:;">
                <i class="icon iconfont we-${icon}"></i>
              </a>`
                  )
                  .join('')
              : ''
          }
        </span>
      </div>
      <div class="content">

        <ul class="chat-list">
          ${
            state.listData
              ? state.listData
                  .map(
                    data => `
              <li class="chat-item">
                <a class="link router-link" data-link-to=${data.link}?id=${data.id} href="javascript:;">
                  <div class="avatar">
                    <img src="${$router.base + data.avatar}" alt="avatar" />
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
                  .join('')
              : `<div class="loading">
              <img src="${$router.base}/images/loading.gif" alt="loading"/>
            </div>`
          }
        </ul>
      </div>
      <div class="footer">
        <ul class="tab-bar">
          <li class="item">
            <a class="link router-link selected" data-link-to="/" href="javascript:;">
              <i class="icon iconfont we-interactive_fill"></i>
              <span class="title">微信</span>
            </a>
          </li>
          <li class="item">
            <a class="link router-link" data-link-to="/address_book" href="javascript:;">
              <i class="icon iconfont we-addressbook"></i>
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
    this.template = template(state);
    createDom(this.template);
  }
  mount() {
    const $el = this.$el;
    const $goBack = $el.querySelector('.header .go-back');
    if ($goBack) {
      $goBack.addEventListener('click', e => {
        e.preventDefault();
        $router.navigateBack();
      });
    }

    const $list = $el.querySelectorAll('.chat-list .router-link');
    $list.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        $router.navigateTo(item.dataset.linkTo);
      });
    });

    const $tabs = $el.querySelectorAll('.tab-bar .router-link');
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
