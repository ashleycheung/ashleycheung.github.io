import { Component } from "./component";
import { createHTMLElement as e } from './helper';

export class Footer extends Component {
  override createElement(): HTMLElement {
      return e('div', {
        class: 'footer',
        children: [
          e('div', {
            class: 'social-container',
            children: [
              e('a', {
                class: 'hidden-link',
                target: '_blank',
                rel: 'noopener noreferrer',
                href: 'https://www.instagram.com/ashley_cheung24/',
                children: [
                  e('img', {
                    class: 'social-btn',
                    src: 'assets/instagram-brands.svg',
                    alt: 'instagram'
                  })
                ]
              }),
              e('a', {
                class: 'hidden-link',
                target: '_blank',
                rel: 'noopener noreferrer',
                href: 'https://www.linkedin.com/in/ashley-cheung-209698177/',
                children: [
                  e('img', {
                    class: 'social-btn',
                    src: 'assets/linkedin-in-brands.svg',
                    alt: 'linkedin'
                  })
                ]
              }),
              e('a', {
                class: 'hidden-link',
                target: '_blank',
                rel: 'noopener noreferrer',
                href: 'https://github.com/ashleycheung',
                children: [
                  e('img', {
                    class: 'social-btn',
                    src: 'assets/github-brands.svg',
                    alt: 'github'
                  })
                ]
              }),
            ]
          }),
          e('div', {
            class: 'footer-name',
            innerText: 'ASHLEY CHEUNG',
            children: [
              e('span', {
                class: 'copyright',
                innerText: '© 2022'
              })
            ]
          })
        ]
      })
  }
}