import { Component } from "./component";
import { createHTMLElement as e } from './helper';

export class ContactMe extends Component {
  override createElement(): HTMLElement {
    return e('div', {
      id: 'contact',
      class: 'contact-me',
      children: [
        e('h2', {
          class: 'center-title',
          innerText: 'Get In Touch'
        }),
        e('div', {
          class: 'contact-text',
          innerText: 'Want to contact me? Chuck me an email!'
        }),
        e('div', {
          class: 'contact-email',
          innerText: 'ashleycheung2412gmail.com'
        })
      ]
    })
  }
}