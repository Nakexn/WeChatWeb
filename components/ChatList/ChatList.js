import Base from '../Base/Base.js';
import ChatItem from '../ChatItem/ChatItem.js';
import listData from '../../mock/chatListData.js';

let template = '';

for (let i = 0; i < listData.length; i++) {
  template += new ChatItem(listData[i]).template;
}

export default class ChatList extends Base {
  constructor() {
    super();
    this.template = `<div class="content">
        <ul class="chat-list">${template}</ul>
      </div>`;
  }
}
