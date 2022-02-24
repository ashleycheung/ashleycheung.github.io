import { replaceChildren } from "./helper";

export abstract class Component {
  root: HTMLElement | null = null;
  elem: HTMLElement = this.createElement();
  
  /**
   * Creates the component element
   */
  abstract createElement(): HTMLElement;
  
  /**
   *  Inserts under parent
   * @param root 
   */
  attach(root: HTMLElement): void {
    this.root = root;
    this.root.appendChild(this.elem);
  }
  
  /**
   * Removes the current component
   */
  remove(): void {
    this.elem.remove();
  }
}