import { Component } from "./component";
import { createHTMLElement as e, isMobile, replaceChildren } from './helper';
import { createLazyLoad } from "./loader";
import { DATA } from "./projectdata";

export class Projects extends Component {
  override createElement(): HTMLElement {
    return e('div', {
      id: 'projects',
      class: 'projects-page-wrapper',
      children: [
        e('h2', {
          class: 'center-title',
          innerText: 'Projects'
        }),
        this._createFeaturedProjects(),
        e('h2', {
          class: 'center-title',
          innerText: 'Other noteworthy projects'
        }),
        this._createRegularProjects()
      ]
    })
  }
  
  private _createProjectSelector(renderProjects: any, tag: string): HTMLElement {
    const onClick = (e: any) => {
      replaceChildren(
        document.getElementById('project-regular-wrapper')!,
        renderProjects(e.target.innerText)
      )
      createLazyLoad();
    }
    const className = (t: any) => t.toLowerCase() === tag.toLowerCase() ? 
      `project-regular-selector-btn project-regular-selector-btn-active` : 
      'project-regular-selector-btn';
    return e('div', {
      'class': 'project-regular-selector',
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
  
  private _createRegularProjects(tag = 'all'): HTMLElement {
    // Make regular projects
    const projChildren = [];
    for (const project of DATA.projects) {
      // Convert all technologies to lower case
      const lowerTech = project.technologies.map(t => t.toLowerCase());
      const tagLower = tag.toLowerCase();
      // Only render if all is selected or correct tag
      if (tagLower === 'all' || lowerTech.includes(tagLower)) {
        projChildren.push(e('div', {
          class: 'project-regular-project-wrapper',
          onclick: () => window.open(project.projectSrc, '_blank')!.focus(),
          children: [
            e('img', {
              class: 'project-regular-thumbnail lazy-load',
              'data-src': project.thumbnailSrc,
              loading: 'lazy',
            }),
            e('div', {
              class: 'project-regular-title',
              innerText: project.title
            }),
            e('div', {
              class: 'project-regular-tech-list',
              innerText: project.technologies.reduce((p,c) => `${p} / ${c}`)
            }),
            e('div', {
              class: 'project-regular-desc',
              innerText: project.desc
            }),
          ]
        }))
      }
    }

    return e('div', {
      id: 'project-regular-wrapper',
      class: 'project-regular-wrapper',
      children: [
        this._createProjectSelector(this._createRegularProjects.bind(this), tag),
        e('div', {
          class: 'project-regular-list',
          children: projChildren
        })
      ]
    })
  }
  
  private _createFeaturedProjects(): HTMLElement {
    // Make featured projects
    const projChildren = [];
    for (const project of DATA.featuredProjects) {
      projChildren.push(e('div', {
        class: 'project-featured-wrapper',
        children: [
          e('img', {
            class: 'project-featured-thumbnail lazy-load',
            'data-src': project.thumbnailSrc,
            onclick: () => window.open(project.projectSrc, '_blank')!.focus(),
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
    
    return e('div', {
      class: 'project-featured-list',
      children: projChildren,
    })
    
  }
}