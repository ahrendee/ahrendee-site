declare var $: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  active = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  menuToggle() {
    this.active = !this.active;
  }
}
