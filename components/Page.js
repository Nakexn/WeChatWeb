let uid = 0;

export default class Page {
  constructor(options) {
    this._init(options);
  }
  _init() {
    const self = this;
    const createDom = self.createDom.bind(self);
    self.uid = uid++;
    self.beforeRender();
    self.render(createDom);
    self.mount();
  }
  beforeRender() {}
  render() {}
  createDom(template) {
    const self = this;
    const container = document.createElement('div');
    container.className = 'container';
    container.dataset['wxId'] = self.uid.toString();
    container.innerHTML = template;
    self.$el = container;
  }
  mount() {}
}
