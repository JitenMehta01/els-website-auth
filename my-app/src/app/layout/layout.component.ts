import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor() { }

  ngOnInit(): void {
  }

  opened = false;

  toggleMenu(event: Event){
    this.opened = !this.opened;
  }

}
