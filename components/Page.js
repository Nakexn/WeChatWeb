let uid = 0;

export default class Page {
  constructor(options) {
    this._init(options);
  }
  _init(options) {
    const self = this;
    const createDom = self.createDom.bind(self);
    self.uid = uid++;
    self.initState(options ? options.state : undefined);
    self.onStateChange();
    self.beforeRender();
    self.render(createDom);
    self.mount();
    self.mounted = true;
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
  initState(state) {
    const self = this;
    if (state && state instanceof Object) {
      self.state = state;
    } else {
      self.state = {};
    }
  }
  onStateChange() {
    const self = this;
    for (const propName in self.state) {
      let value = self.state[propName];
      if (self.state.hasOwnProperty(propName)) {
        Object.defineProperty(self.state, propName, {
          get() {
            return value;
          },
          set(newValue) {
            if (value !== newValue) {
              value = newValue;
              self.update();
            }
          }
        });
      }
    }
  }
  setState(newState) {
    const state = this.state;
    for (const propName in newState) {
      if (newState.hasOwnProperty(propName)) {
        state[propName] = newState[propName];
      }
    }
  }
  update() {
    const self = this;
    const createDom = self.createDom.bind(self);
    if (this.mounted) {
      const oldEl = this.$el;
      self.render(createDom);
      self.mount();
      const newEl = this.$el;
      const el = document.querySelector(`div.container[data-wx-id="${this.uid}"]`);
      if (el) {
        const parentEl = el.parentElement;
        parentEl.replaceChild(newEl, oldEl);
        $router.pageStack[$router.len - 1] = newEl;
      } else {
        return;
      }
    }
  }
}
