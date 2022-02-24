import { Component } from "./component";
import { createHTMLElement as e } from './helper';

export class LoadingScreen extends Component {
  override createElement(): HTMLElement {
    return e('div', {
      id: 'loading-screen',
      class: 'loading-screen loading-screen-visible',
      children: [
        e('div', {
          class: 'loading-text',
          innerText: 'Loading'
        }),
        e('img', {
          class: 'loading-icon',
          src: 'assets/loading.svg',
          alt: 'loading'
        })
      ]
    })
  }
  
  override attach(root: HTMLElement): void {
    super.attach(root);
    document.addEventListener('DOMContentLoaded', () => {
      const loadingscreen = document.getElementById('loading-screen')!;
      // Wait one second
      setTimeout(() => {
        loadingscreen.classList.add('loading-screen-hidden');
        loadingscreen.classList.remove('loading-screen-visible');
      }, 1000);
    }, { once: true })
  }
}