export function createNode(htmlStr) {
  var div = document.createElement('div');
  div.innerHTML = htmlStr;
  return div.childNodes[0];
}
