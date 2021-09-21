export default class Base {
  createNode() {
    let div = document.createElement('div');
    div.innerHTML = this.template;
    return div.childNodes[0];
  }
}
