import Page from '../../components/Page.js';
import config from './config.js';
import userData from './mock.js';

class UserProfile extends Page {
  constructor() {
    super();
  }
  beforeRender() {
    this.state = {
      title: config.title,
      navBarIcons: config.navBarIcons,
      userData: userData
    };
  }
  render(createDom) {
    const state = this.state;
    const userData = state.userData;
    const template = `
      <div class="header profile">
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
      <div class="content profile">
        <div class="user_profile">
          <div class="user-info">
            <div class="avatar">
              <img src="${$router.base + userData.avatar}" alt="avatar" />
            </div>
            <div class="main">
              <div class="name ellipsis">
                <span>${userData.name}</span>
                <i class="icon iconfont we-nan"></i>
              </div>
              <div class="nickname ellipsis">昵称：${userData.nickname}</div>
              <div class="user-id ellipsis">微信号：${userData.wxid}</div>
              <div class="area ellipsis">地区：${userData.area}</div>
            </div>
          </div>
          <div class="set-info">
            <a class="item" href="javascript:;">
              <span>设置备注和标签</span>
              <i class="icon iconfont we-enter"></i>
            </a>
            <a class="item" href="javascript:;">
              <span>朋友权限</span>
              <i class="icon iconfont we-enter"></i>
            </a>
          </div>
        </div>
        <div class="other-info">
          <a class="item" href="javascript:;">
            <span>朋友圈</span>
            <i class="icon iconfont we-enter"></i>
          </a>
          <a class="item" href="javascript:;">
            <span>更多信息</span>
            <i class="icon iconfont we-enter"></i>
          </a>
        </div>
        <div class="go-to-chat">
          <a class="item" href="javascript:;">
            <i class="icon iconfont we-message"></i>
            <span>发消息</span>
          </a>
          <a class="item" href="javascript:;">
            <i class="icon iconfont we-video"></i>
            <span>音视频通话</span>
          </a>
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
  }
}

export default UserProfile;
