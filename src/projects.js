import { elem as e } from './helper.js';
import { createLazyLoad } from './loader.js';
import { DATA } from './projectdata.js';

function ProjectSelector (renderProjects, tag) {
  const onClick = e => {
    renderProjects(e.target.innerText);
  }
  const className = t => t.toLowerCase() === tag.toLowerCase() ? 
    `project-selector-btn project-selector-btn-active` : 
    'project-selector-btn';
  return e('div', {
    'class': 'project-selector',
    children: [
      e('button', {
        class: className('all'),
        innerText: 'All',
        onclick: onClick,
      }),
      e('button', {
        class: className('react'),
        innerText: 'React',
        onclick: onClick,
      }),
      e('button', {
        class: className('python'),
        innerText: 'Python',
        onclick: onClick,
      }),
    ]
  })
}

/**
 * Renders all the regular projects
 * @param {string} tag - tag of projects to show 
 */
function renderRegularProjects(tag = 'all') {
  const rootDiv = document.getElementById('project-regular');
  // Make regular projects
  const projChildren = [];
  for (const project of DATA.projects) {
    // Convert all technologies to lower case
    const lowerTech = project.technologies.map(t => t.toLowerCase());
    const tagLower = tag.toLowerCase();
    // Only render if all is selected or correct tag
    if (tagLower === 'all' || lowerTech.includes(tagLower)) {
      projChildren.push(e('div', {
        class: 'project-wrapper',
        onclick: () => window.open(project.projectSrc, '_blank').focus(),
        children: [
          e('img', {
            class: 'project-thumbnail lazy-load',
            'data-src': project.thumbnailSrc,
            loading: 'lazy',
          }),
          e('div', {
            class: 'project-title',
            innerText: project.title
          }),
          e('div', {
            class: 'project-tech-list',
            innerText: project.technologies.reduce((p,c) => `${p} / ${c}`)
          }),
          e('div', {
            class: 'project-desc',
            innerText: project.desc
          }),
        ]
      }))
    }
  }
  // Add to rootDiv
  rootDiv.replaceChildren(
    ProjectSelector(renderRegularProjects, tag),
    e('div', {
      class: 'project-list',
      children: projChildren,
    })
  );
  // Lazy Load
  createLazyLoad();
}

function renderFeaturedProjects() {
  const rootDiv = document.getElementById('project-featured');
  // Make featured projects
  const projChildren = [];
  for (const project of DATA.featuredProjects) {
    projChildren.push(e('div', {
      class: 'project-featured-wrapper',
      children: [
        e('img', {
          class: 'project-featured-thumbnail lazy-load',
          'data-src': project.thumbnailSrc,
          onclick: () => window.open(project.projectSrc, '_blank').focus(),
        }),
        e('div', {
          class: 'project-featured-content',
          children: [
            e('div', {
              class: 'project-featured-title',
              innerText: project.title
            }),
            e('div', {
              class: 'project-featured-tech-list',
              innerText: project.technologies.reduce((p,c) => `${p} / ${c}`)
            }),
            e('div', {
              class: 'project-featured-desc',
              innerText: project.desc
            })
          ]
        })
      ]
    }))
  }
  // Add to rootDiv
  rootDiv.replaceChildren(
    e('div', {
      class: 'project-featured-list',
      children: projChildren,
    })
  );
}

renderFeaturedProjects();
renderRegularProjects();
