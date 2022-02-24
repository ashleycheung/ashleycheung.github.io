import { Component } from './component';
import { createHTMLElement as e, isMobile } from './helper';

export class Header extends Component {
  lastScroll: number = document.body.scrollTop;
  
  /**
   * Stores the render header callback function
   */
  renderHeader: any = () => {
    if (document.body.scrollTop > this.lastScroll && document.body.scrollTop !== 0) {
      this.elem.classList.add('header-hide');
      this.elem.classList.remove('header-show');
    } else {
      this.elem.classList.add('header-show');
      this.elem.classList.remove('header-hide');
    }
    this.lastScroll = document.body.scrollTop;
  }
  
  hideMobileNav: any = () => {
    const navBarMobile = document.getElementsByClassName('header-mobile-nav')[0] as HTMLDivElement;
    navBarMobile.style.right = "-75%";
    navBarMobile.style.zIndex = '0';
  }
  
  showMobileNav: any = () => {
    const navBarMobile = document.getElementsByClassName('header-mobile-nav')[0] as HTMLDivElement;
    navBarMobile.style.right = "0px";
    navBarMobile.style.zIndex = '999';
  }
  
  override createElement(): HTMLElement {
    /**
      Mobile header
    */
    if (isMobile()) {
      // Header
      return e('div', {
        class: 'header header-hide',
        children: [
          e('img', {
            class: 'header-logo',
            src: './assets/favicon.svg'
          }),
          e('div', {
            class: 'header-menu-btn',
            onclick: () => this.showMobileNav(),
            children: [
              e('img', {
                src: './assets/bars.svg',
              }),
            ]
          }),
          e('div', {
            class: 'header-mobile-nav',
            children: [
              e('img', {
                class: 'header-mobile-exit-btn',
                src: './assets/cross.svg',
                onclick: () => this.hideMobileNav(),
              }),
              e('a', {
                class: 'header-mobile-nav-item',
                href: '#about-me',
                innerText: 'About',
                onclick: () => this.hideMobileNav(),
              }),
              e('a', {
                class: 'header-mobile-nav-item',
                href: '#education',
                innerText: 'Education',
                onclick: () => this.hideMobileNav(),
              }),
              e('a', {
                class: 'header-mobile-nav-item',
                href: '#projects',
                innerText: 'Projects',
                onclick: () => this.hideMobileNav(),
              }),
              e('a', {
                class: 'header-mobile-nav-item',
                href: '#contact',
                innerText: 'Contact',
                onclick: () => this.hideMobileNav(),
              }),
            ]
          })
        ]
      }) 
    }
    /**
      Laptop
    */
    return e('div', {
      class: 'header header-hide',
      children: [
        e('img', {
          class: 'header-logo',
          src: './assets/favicon.svg'
        }),
        e('div', {
          class: 'header-nav',
          children: [
            e('a', {
              class: 'header-nav-item',
              href: '#about-me',
              innerText: 'About'
            }),
            e('a', {
              class: 'header-nav-item',
              href: '#education',
              innerText: 'Education'
            }),
            e('a', {
              class: 'header-nav-item',
              href: '#projects',
              innerText: 'Projects'
            }),
            e('a', {
              class: 'header-nav-item',
              href: '#contact',
              innerText: 'Contact'
            }),
          ]
        })
      ]
    })
  }
  
  override attach(root: HTMLElement): void {
    super.attach(root);
    // Update the last scroll
    this.lastScroll = document.body.scrollTop;
    
    // On scroll check if at top
    window.addEventListener('scroll', this.renderHeader)
    this.renderHeader();
  }
  
  override remove(): void {
    super.remove();
    window.removeEventListener('scroll', this.renderHeader)
  }
}