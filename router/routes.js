import Index from '../pages/index/index.js';
import Chat from '../pages/chat/chat.js';
import AddressBook from '../pages/addressBook/address_book.js';
import Find from '../pages/find/find.js';
import Me from '../pages/me/me.js';
import UserProfile from '../pages/userProfile/user_profile.js';

const routes = {
  '/': Index,
  '/chat': Chat,
  '/user_profile': UserProfile,
  '/address_book': AddressBook,
  '/find': Find,
  '/me': Me
};

export default routes;
