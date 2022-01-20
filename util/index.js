export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split(' ');
  newClass.push(className);
  el.className = newClass.join(' ');
}

export function removeClass(el, className) {
  if (hasClass(el, className)) {
    let oldClass = el.className.split(' ');
    const index = oldClass.indexOf(className);
    oldClass.splice(index, 1);
    el.className = oldClass.join(' ');
  }
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}

export function removeSiblingClass(el, className) {
  let r = [];
  let p = el.parentNode.parentNode.children;
  for (let i = 0; i < p.length; i++) {
    let tab = p[i].querySelector('a');
    if (tab !== el) r.push(tab);
  }
  r.forEach(item => {
    removeClass(item, className);
  });
}

export function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    writable: false,
    enumerable: true,
    value: value
  });
}
