import Home from '../pages/home/index.js';
import WeChat from '../pages/home/wechat/index.js';
import MailList from '../pages/home/mail-list/index.js';
import Find from '../pages/home/find/index.js';
import Me from '../pages/home/me/index.js';
import Chat from '../pages/chat/index.js';
import UserProfile from '../pages/user-profile/index.js';

const routes = [
  {
    path: '/',
    redirect: '/home/wechat'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/wechat',
        component: WeChat
      },
      {
        path: '/maillist',
        component: MailList
      },
      {
        path: '/find',
        component: Find
      },
      {
        path: '/me',
        component: Me
      }
    ]
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/userprofile',
    component: UserProfile
  }
];

export default routes;
