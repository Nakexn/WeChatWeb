export default class windowBase {
  constructor() {
    this.baseUrl = window.location.href;
  }
  createNode(template) {
    let div = document.createElement('div');
    div.innerHTML = template ? template : this.template;
    return div.childNodes[0];
  }
}
