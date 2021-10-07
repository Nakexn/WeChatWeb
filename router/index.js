class Router {
  constructor({ routes, base } = config) {
    this.routes = routes || {};
    this.hash = "#";
    this.origin = window.location.origin;
    this.pageStack = [];
    this.len = 0;
    this._base = base || "";
    this.init();
  }
  init() {
    let path = window.location.href;
    path = path.replace(this.origin + this.base(), "");
    console.log(path);
    if (path in this.routes) {
      this.navigateTo(path);
    } else {
      this.navigateTo("*");
    }
  }
  base(path) {
    if (arguments.length === 0) return this._base;
    this._base = path;
  }
  navigateTo(path) {
    const Page = this.routes[path];
    const page = new Page();
    // const funcStack = [];
    page.componentWillMount();
    const template = page.render();
    const $el = document.createElement("div");
    $el.classList = ["container"];
    $el.innerHTML = template;
    page.componentDidMount();
    document.querySelector("#app").appendChild($el);
  }
  navigateBack(delta) {}
  switchTab(path) {}
}

export default Router;
