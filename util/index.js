export function createNode(htmlStr) {
  var div = document.createElement('div');
  div.innerHTML = htmlStr;
  return div.childNodes[0];
}

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

export function moveTo() {}
