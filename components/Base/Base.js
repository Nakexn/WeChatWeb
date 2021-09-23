export default class Base {
  createNode(template) {
    let div = document.createElement('div');
    div.innerHTML = template ? template : this.template;
    return div.childNodes[0];
  }
}
