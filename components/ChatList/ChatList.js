import Base from '../Base/Base.js';
import ChatItem from '../ChatItem/ChatItem.js';
import listData from '../../mock/chatListData.js';

let template = '';

const $el = document.createElement('ul');
$el.className = 'chat-list';

for (let i = 0; i < listData.length; i++) {
  const chatItem = new ChatItem(listData[i]);
  template += chatItem.template;
  $el.appendChild(chatItem.$el);
}

export default class ChatList extends Base {
  constructor() {
    super();
    this.template = `<div class="content">
        <ul class="chat-list">${template}</ul>
      </div>`;
    const el = this.createNode('<div class="content"></div>');
    el.appendChild($el);
    this.$el = el;
  }
}
