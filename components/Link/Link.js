import Base from '../Base/Base.js';
import { routes } from '../../route/index.js';
import { addClass, removeClass } from '../../util/index.js';

export default class Link extends Base {
  constructor(props) {
    super();
    this.href = props.href;
    this.template = `<a class="link" 
    href="${this.href}">
    ${props.slot}
    </a>`;
  }
  $el() {
    const $el = this.createNode(this.template);
    $el.addEventListener('click', this.go);
    return $el;
  }
  go(e) {
    e.preventDefault();
    window.moving = true;
    const self = this;
    window.currentRoute = self.href.replace(window.location.origin, '');
    const $el =
      routes[
        window.currentRoute.indexOf('WeChatWeb') >= 0
          ? window.currentRoute.replace('/WeChatWeb', '')
          : window.currentRoute
      ];
    const $prevEl = window.pageStack[window.pageStack.length - 1];
    addClass($el, 'container-in');
    window.pageStack.push($el);
    let pushUrl;
    if (this.baseUrl.indexOf('WeChatWeb') >= 0) {
      pushUrl = '/WeChatWeb' + window.currentRoute;
    } else {
      pushUrl = window.currentRoute;
    }
    window.history.pushState(null, null, pushUrl);
    const $app = document.getElementById('app');
    $app.appendChild($el);
    setTimeout(() => {
      removeClass($el, 'container-in');
    }, 0);
    setTimeout(() => {
      $app.removeChild($prevEl);
      window.moving = false;
    }, 500);
  }
}
