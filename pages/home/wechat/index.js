import Componet from '../../../components/Componet.js';
import config from './config.js';
import listData from './mock.js';

class Index extends Componet {
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
                    <img src="${$router._getBase() + data.avatar}" alt="avatar" />
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
              <img src="${$router._getBase()}/images/loading.gif" alt="loading"/>
            </div>`
          }
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

    //绑定事件
  }
}

export default Index;
