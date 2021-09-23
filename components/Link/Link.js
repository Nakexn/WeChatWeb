import Base from '../Base/Base.js';
import { routes, baseUrl } from '../../route/index.js';
import { addClass, removeClass } from '../../util/index.js';

export default class Link extends Base {
  constructor(props) {
    super();
    this.herf = props.herf;
    this.template = `<a class="link" 
    href="${this.herf}">
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
    window.currentRoute = self.href.replace(baseUrl, '');
    const $el = routes[window.currentRoute];
    const $prevEl = window.pageStack[window.pageStack.length - 1];
    addClass($el, 'container-in');
    window.pageStack.push($el);
    window.history.pushState(null, null, window.currentRoute);
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
