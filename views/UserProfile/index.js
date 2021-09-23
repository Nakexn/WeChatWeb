import NavBar from '../../components/NavBar/NavBar.js';
import Profile from '../../components/Profile/Profile.js';
import Base from '../../components/Base/Base.js';

const navBarProps = {
  title: '',
  goBack: true,
  right: ['more'],
  backgroundColor: '#fff'
};

const navBar = new NavBar(navBarProps);
const profile = new Profile();

const $el = document.createElement('div');
$el.className = 'container';
$el.appendChild(navBar.$el);
$el.appendChild(profile.$el);

export default class UserProfile extends Base {
  constructor() {
    super();
    this.template = navBar.template + profile.template;
    this.$el = $el;
  }
}
