import Page from '../../components/Page.js';
import ChatCom from './chat/index.js';

class Chat extends Page {
  constructor() {
    super();
    this._init();
  }
  _init() {
    this.pageStack = [];
    const $chat = new ChatCom();
    this.createPage($chat.$el);
  }
  createPage(el) {
    const container = document.createElement('div');
    container.classList.add('page-wrapper');
    container.dataset.pageId = this.uid++;
    container.appendChild(el);
    this.$el = container;
  }
}

export default Chat;
