import Router from './router/index.js';
import Home from './pages/home/index.js';
import WeChat from './pages/home/wechat/index.js';
import MailList from './pages/home/mail-list/index.js';
import Find from './pages/home/find/index.js';
import Me from './pages/home/me/index.js';
import Chat from './pages/chat/index.js';
import UserProfile from './pages/user-profile/index.js';

const router = new Router('app');

router.route('/home', Home);
router.route('/home/wechat', WeChat);
router.route('/home/maillist', MailList);
router.route('/home/find', Find);
router.route('/home/me', Me);
router.route('/chat', Chat);
router.route('/userprofile', UserProfile);

router.route('*', (req, res, next) => {
  res.redirect('/home/wechat');
});

window.$router = router;

// router.base('/WeChatWeb');
