import { Component } from "./component";
import { createHTMLElement as e } from './helper';

export class AboutMe extends Component {

  override createElement(): HTMLElement {
    return e('div', {
      id: 'about-me',
      class: 'about-me',
      children: [
        e('h2', {
          class: 'center-title',
          innerText: 'About Me'
        }),
        e('div', {
          class: 'about-me-content',
          children: [
            e('img', {
              class: 'about-me-img',
              src: '/assets/profile.jpg'
            }),
            e('div', {
              class: 'about-me-text',
              innerText: `I am an aspiring engineer, and currently a student at UNSW studying mechatronics engineering and computer science. In my spare time, I love to tinker around with code and make fun projects! In my downtimes, I love to go for runs and cycle at the park!`
            })
          ]
        })
      ]
    })
  }
}