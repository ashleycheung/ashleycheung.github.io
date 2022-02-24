import { Component } from "./component";
import { createHTMLElement as e } from './helper';


export class Education extends Component {
  override createElement(): HTMLElement {
    return e('div', {
      id: 'education',
      class: 'education',
      children: [
        e('div', {
          class: 'education-content',
          children: [
            e('div', {
              class: 'education-title',
              innerText: 'UNSW'
            }),
            e('div', {
              class: 'education-date',
              innerText: '2019 - Now'
            }),
            e('div', {
              class: 'education-point',
              innerText: 'Engineering (Mechatronics) / Computer Science'
            }),
            e('div', {
              class: 'education-point',
              innerText: `Included on the 2020 UNSW Dean's Honour's list`
            }),
            e('div', {
              class: 'education-point',
              innerText: 'Distinction WAM Average'
            })
          ]
        }),
        e('div', {
          class: 'education-content education-alt',
          children: [
            e('div', {
              class: 'education-title education-alt',
              innerText: 'Baulkham Hills Highschool'
            }),
            e('div', {
              class: 'education-date education-alt',
              innerText: '2017 - 2018'
            }),
            e('div', {
              class: 'education-point education-alt',
              innerText: 'Graduated with an ATAR of 98.95'
            }),
          ]
        })
      ]
    })
  }
}