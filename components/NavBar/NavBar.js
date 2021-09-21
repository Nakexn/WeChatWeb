import Base from '../Base/Base.js';

export default class NavBar extends Base {
  constructor(props) {
    super();
    this.template = `<div class="header">
      <span class="left" style="display: ${props.goBack ? 'flex' : 'none'};">
        <a class="link" href="javascript:history.go(-1)">
          <i class="icon iconfont we-return"></i>
        </a>
      </span>
      <p class="title">${props.title}</p>
      <span class="right">
        <a class="link" href="javascript:;">
          <i class="icon iconfont we-${props.right[0]}"></i>
        </a>
        <a class="link" style="display: ${props.right.length > 1 ? 'block' : 'none'};" href="javascript:;">
          <i class="icon iconfont we-${props.right[1]}"></i>
        </a>
      </span>
    </div>`;
  }
}
