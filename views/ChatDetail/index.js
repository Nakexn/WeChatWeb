import NavBar from '../../components/NavBar/NavBar.js';
import ChatDetailBox from '../../components/ChatDetail/ChatDetail.js';
import ChatOperator from '../../components/ChatOperator/ChatOperator.js';
import Base from '../../components/Base/Base.js';

const navBarProps = {
  title: '张三',
  goBack: true,
  right: ['more']
};

const navBar = new NavBar(navBarProps);
const chatDetailBox = new ChatDetailBox();
const chatOperator = new ChatOperator();

const $el = document.createElement('div');
$el.className = 'container';
$el.appendChild(navBar.$el);
$el.appendChild(chatDetailBox.$el);
$el.appendChild(chatOperator.$el);

export default class ChatDetail extends Base {
  constructor() {
    super();
    this.template = navBar.template + chatDetailBox.template + chatOperator.template;
    this.$el = $el;
  }
}
