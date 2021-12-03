/**
 * 
 * @param {string} name - tag name
 * @param {object} attributes - attributes
 * @returns 
 */
export function elem(name, attributes) {
  let newElem = document.createElement(name);
  for (let a in attributes) {
    if (a.startsWith('on')) {
      newElem.addEventListener(a.substring(2), attributes[a]);
    } else if (a == 'innerText') {
      newElem.innerText = attributes[a];
    } else if (a == 'class') {
      //Add each class to the class list
      for (let className of attributes[a].split(' ')) {
        newElem.classList.add(className);
      }
    } else if (a == 'children') {
      //If given a list of children, add it to the new element
      for (let child of attributes[a]) {
        newElem.appendChild(child);
      }
    } else {
      newElem.setAttribute(a, attributes[a]);
    }
  }
  return newElem;
}