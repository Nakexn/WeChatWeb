import Page from '../../components/Page.js';
import UserProfileCom from './user-profile/index.js';

class UserProfile extends Page {
  constructor() {
    super();
    this._init();
  }
  _init() {
    this.pageStack = [];
    const $profile = new UserProfileCom();
    this.createPage($profile.$el);
  }
  createPage(el) {
    const container = document.createElement('div');
    container.classList.add('page-wrapper');
    container.dataset.pageId = this.uid++;
    container.appendChild(el);
    this.$el = container;
  }
}

export default UserProfile;
