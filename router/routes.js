import Index from "../pages/index/index.js";
import Chat from "../pages/chat/chat.js";

const routes = {
  "/": Index,
  "/chat": Chat,
  "/user_profile": "user_profile",
  "/address_book": "AddressBook",
  "/moments": "Moments",
  "/me": "Me",
};

export default routes;
