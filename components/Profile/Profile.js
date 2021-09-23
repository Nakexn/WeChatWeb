import Base from '../Base/Base.js';

export default class Profile extends Base {
  constructor() {
    super();
    this.template = `<div class="content profile">
      <div class="user_profile profile">
        <div class="user-info">
          <div class="avatar">
            <img src="${this.baseUrl}images/avatar.jpg" alt="张三" />
          </div>
          <div class="main">
            <div class="name ellipsis">
              <span>张三</span>
              <i class="icon iconfont we-nan"></i>
            </div>
            <div class="nickname ellipsis">昵称：上善若水</div>
            <div class="user-id ellipsis">微信号：8shfuif2903ir023iasdkj</div>
            <div class="area ellipsis">地区：北京 北京</div>
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
    this.$el = this.createNode(this.template);
  }
}
