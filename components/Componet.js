let uid = 0;

export default class Component {
  constructor(options) {
    this._init(options);
  }
  _init(options) {
    const self = this;
    const createDom = self.createDom.bind(self);
    self.uid = uid++;
    self.initState(options ? options.state : undefined);
    self.listenStateChange();
    self.beforeRender();
    self.render(createDom);
    self.mount();
    self.mounted = true;
  }
  initState(state) {
    const self = this;
    if (state && state instanceof Object) {
      self.state = state;
    } else {
      self.state = {};
    }
  }
  listenStateChange() {
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
  beforeRender() {}
  render() {}
  createDom(template) {
    const self = this;
    const container = document.createElement('div');
    container.classList.add('component');
    container.dataset['componentId'] = self.uid.toString();
    container.innerHTML = template;
    self.$el = container;
  }
  mount() {}

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
    if (self.mounted) {
      const oldEl = self.$el;
      self.render(createDom);
      self.mount();
      const newEl = self.$el;
      const el = document.querySelector(`div.component[data-component-id="${self.uid}"]`);
      if (el) {
        const parentEl = el.parentElement;
        parentEl.replaceChild(newEl, oldEl);
        // $router.pageStack[$router.len - 1] = newEl;
      } else {
        return;
      }
    }
  }
}
