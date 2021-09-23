import WeChat from '../views/WeChat/index.js';
import ChatDetail from '../views/ChatDetail/index.js';
import UserProfile from '../views/UserProfile/index.js';

// export const baseUrl = window.location.origin;
export const baseUrl = window.location.origin + '/WeChatWeb'; // 线上地址

export const routes = {
  '/': new WeChat().$el,
  '/wechat': new WeChat().$el,
  '/wechat/chat': new ChatDetail().$el,
  '/wechat/chat/user_profile': new UserProfile().$el,
  '/address_book': 'AddressBook',
  '/moments': 'Moments',
  '/me': 'Me'
};
