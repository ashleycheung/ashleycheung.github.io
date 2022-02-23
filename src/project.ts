import { Component } from "./component";
import { createHTMLElement as e, isMobile } from './helper';
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
      ]
    })
  }
  
  private _createProjectSelector(renderProjects: any, tag: string): HTMLElement {
    const onClick = (e: any) => {
      renderProjects(e.target.innerText);
    }
    const className = (t: any) => t.toLowerCase() === tag.toLowerCase() ? 
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
          class: 'project-wrapper',
          onclick: () => window.open(project.projectSrc, '_blank')!.focus(),
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
    // // Add to rootDiv
    // rootDiv.replaceChildren(
    //   this._createRegularProjects(this.renderRegularProjects, tag),
    //   e('div', {
    //     class: 'project-list',
    //     children: projChildren,
    //   })
    // );
    
    
    // // Lazy Load
    // createLazyLoad();
    return e('div', {
      class: 'project-regular-wrapper'
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