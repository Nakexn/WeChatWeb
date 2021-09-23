import NavBar from '../../components/NavBar/NavBar.js';
import ChatList from '../../components/ChatList/ChatList.js';
import TabBar from '../../components/TabBar/TabBar.js';
import Base from '../../components/Base/Base.js';

const navBarProps = {
  title: '微信',
  right: ['search', 'addition']
};

const navBar = new NavBar(navBarProps);
const chatList = new ChatList();
const tabBar = new TabBar();

const $el = document.createElement('div');
$el.className = 'container';
$el.appendChild(navBar.$el);
$el.appendChild(chatList.$el);
$el.appendChild(tabBar.$el);

export default class WeChat extends Base {
  constructor() {
    super();
    this.template = navBar.template + chatList.template + tabBar.template;
    this.$el = $el;
  }
}
