import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavitemService {

  constructor() { }

  menuItems = [
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Biography',
      link: 'biography'
    },
    {
      name: 'Qualification',
      link: 'qualification'
    },
    {
      name: 'Skills',
      link: 'skills'
    },
    {
      name: 'Projects',
      link: 'projects'
    },
  ]

  getMenuItems() {
    return this.menuItems;
  }
}
