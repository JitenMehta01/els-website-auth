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

  openMenu(event: Event){
    if (!this.opened) {
      this.opened = true;
    } else{
      this.opened = false;
    }
  }

  opened = false;
  status = false;

  learning = false;
  platform = false;
  delivery = false;
  aboutUs = false;

  toggleLinks(toggle: string) {
    this[toggle] = !this[toggle];
  }

}


