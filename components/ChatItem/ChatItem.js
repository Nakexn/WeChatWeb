import Base from '../Base/Base.js';
import Link from '../Link/Link.js';

export default class ChatItem extends Base {
  constructor(props) {
    super();
    const slot = new Link({
      herf: '/wechat/chat',
      slot: `<div class="avatar">
        <img src="./images/avatar.jpg" alt="张三" />
      </div>
      <div class="main">
        <div class="first-column">
          <div class="name ellipsis">${props.name}</div>
          <div class="message ellipsis">${props.message}</div>
        </div>
        <div class="second-column">
          <div class="time">${props.time}</div>
          <div class="status"></div>
        </div>
      </div>`
    });
    this.template = `<li class="chat-item">
      ${slot.template}
    </li>`;
    const el = this.createNode('<li class="chat-item"></li>');
    el.appendChild(slot.$el());
    this.$el = el;
  }
}
