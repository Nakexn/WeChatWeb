export default class TabBar {
  constructor() {
    this.template = `<div class="footer">
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
    this.$el = this.createNode(this.template);
  }
  createNode() {
    let div = document.createElement('div');
    div.innerHTML = this.template;
    return div.childNodes[0];
  }
}
