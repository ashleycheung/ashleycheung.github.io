/**
 * This loads the portfolio
 */

/**
 * Helper function to make dom elements
 */
 function elem(name, attributes) {
  let newElem = document.createElement(name);
  for (let a in attributes) {
      if (a == 'innerText') {
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

/**
 * Load projects
 * @param {*} data 
 */
function loadProjectsData (data, id) {
  console.log(data);
  // Get div
  const root = document.getElementById(id);
  root.appendChild(elem('div', {
    'class' : 'projects-container',
    'children' : data.map(p => {
      const e = elem('div', {
        'class' : 'project-wrapper',
        'children' : [
          elem('div', {
            'class' : 'project-title',
            'innerText' : p.title
          }),
          elem('img', {
            'class' : 'project-thumbnail',
            'src' : p.thumbnailSrc
          }),
          elem('div', {
            'class' : 'project-desc',
            'innerText' : p.desc,
          }),
          elem('div', {
            'class' : 'project-techs',
            'children' : p.technologies.map(t => elem('div', {
              'class' : 'project-tech-label',
              'innerText' : t
            }))
          })
        ]
      });
      // Go to project link on click
      e.addEventListener('click', () => window.open(p.projectSrc))
      return e;
    })
  }))
}

/**
 * Fetch json data from endpoint
 */
function loadProjects (endpoint, id) {
  fetch(endpoint)
    .then(r => r.json())
    .then(r => loadProjectsData(r, id));
}

loadProjects('/projects.json', 'projects');