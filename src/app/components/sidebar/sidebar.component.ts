import { Component, OnInit } from '@angular/core';

import { NavitemService } from '../../services/navitem.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  sidebarItemList: any[];
  constructor(
    sidebarItems: NavitemService
  ) { 
    this.sidebarItemList = sidebarItems.getMenuItems();
  }

  ngOnInit(): void {
  }

}
