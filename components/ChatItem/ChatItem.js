import Base from '../Base/Base.js';

export default class ChatItem extends Base {
  constructor(props) {
    super();
    this.template = `<li class="chat-item">
      <a class="link" href="./pages/chat.html">
        <div class="avatar">
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
        </div>
      </a>
    </li>`;
  }
}
