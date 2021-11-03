import Page from '../../components/Page.js';
import config from './config.js';
import chatDetail from './mock.js';

class Chat extends Page {
  constructor() {
    super({
      state: {
        title: '',
        navBarIcons: config.navBarIcons,
        listData: {}
      }
    });
  }
  beforeRender() {
    const data = chatDetail.find(detail => {
      return detail.id == $router.params.id;
    });
    this.setState({
      title: data.title,
      chatDetail: data
    });
  }
  render(createDom) {
    const state = this.state;
    const data = state.chatDetail.data;
    const template = `
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
      <div class="content chat-detail">
        ${data
          .map(
            item => `
            <ul class="message-list">
              <li class="item">
                <div class="time">${item.time}</div>
                <div class="main">
                  <ul class="message-group">
                    ${item.chat
                      .map(
                        item => `
                      <li class="message-item ${item.id ? 'left' : 'right'}">
                        <div class="avatar">
                          <a class="link router-link" data-link-to=${item.link}?id=${
                          item.id ? item.id : '0'
                        } href="javascript:;">
                            <img src="${$router.base + item.avatar}" alt="avatar" />
                          </a>
                        </div>
                        <div class="message">
                          ${item.message}
                        </div>
                      </li>
                    `
                      )
                      .join('')}
                  </ul>
                </div>
              </li>
            </ul>
          `
          )
          .join('')}
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

    const $goBack = $el.querySelector('.header .go-back');
    if ($goBack) {
      $goBack.addEventListener('click', e => {
        e.preventDefault();
        $router.navigateBack();
      });
    }

    const $avatar = $el.querySelectorAll('.message-item .avatar .router-link');
    $avatar.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        $router.navigateTo(item.dataset.linkTo);
      });
    });
  }
}

export default Chat;
