import Base from '../Base/Base.js';

export default class ChatOperator extends Base {
  constructor() {
    super();
    this.template = `<div class="footer">
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
    this.$el = this.createNode(this.template);
  }
}
