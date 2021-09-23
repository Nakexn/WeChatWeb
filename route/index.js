import WeChat from '../views/WeChat/index.js';
import ChatDetail from '../views/ChatDetail/index.js';

// export const baseUrl = window.location.origin;
export const baseUrl = window.location.origin + '/WeChatWeb'; // 线上地址

// export const routes = {
//   '/': new WeChat().$el,
//   '/wechat': new WeChat().$el,
//   '/wechat/chat': new ChatDetail().$el,
//   '/wechat/user_profile': 'UserProfile',
//   '/address_book': 'AddressBook',
//   '/moments': 'Moments',
//   '/me': 'Me'
// };

export const routes = {
  '/WeChatWeb': new WeChat().$el,
  '/WeChatWeb/wechat': new WeChat().$el,
  '/WeChatWeb/wechat/chat': new ChatDetail().$el,
  '/WeChatWeb/wechat/user_profile': 'UserProfile',
  '/WeChatWeb/address_book': 'AddressBook',
  '/WeChatWeb/moments': 'Moments',
  '/WeChatWeb/me': 'Me'
};
