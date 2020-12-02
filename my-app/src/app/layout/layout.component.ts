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
  toggle = false;
    

  openMenu(event: Event){
    if (!this.opened) {
      this.opened = true;
    } else{
      this.opened = false;
    }
  }

  toogleLinks(event: Event){
    if (!this.toggle) {
      this.toggle = true;
    } else{
      this.toggle = false;
    }
  }

}

