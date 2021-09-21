import NavBar from '../../components/NavBar/NavBar.js';
import ChatList from '../../components/ChatList/ChatList.js';
import TabBar from '../../components/TabBar/TabBar.js';

const navBarProps = {
  title: '微信',
  right: ['search', 'addition']
};

export const $navBar = new NavBar(navBarProps).createNode();
export const $tabBar = new TabBar().createNode();
export const $chatList = new ChatList().createNode();
