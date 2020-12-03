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
  status = false;

  toggle1 = false;
  status1 = false;

  toggle2 = false;
  status2 = false;

  toggle3 = false;
  status3 = false;
    

  openMenu(event: Event){
    if (!this.opened) {
      this.opened = true;
    } else{
      this.opened = false;
    }
  }

  toogleLinks1(event: Event){
    setTimeout( () =>{
      if (!this.toggle) {
        this.toggle = true;
        this.status = !this.status;
      } else{
        this.toggle = false;
        this.status = false;
      }
    },100)
  }

  toogleLinks2(event: Event){
    setTimeout( () =>{
      if (!this.toggle1) {
        this.toggle1 = true;
        this.status1 = !this.status1;
      } else{
        this.toggle1 = false;
        this.status1 = false;
      }
    },100)
  }

  toogleLinks3(event: Event){
    setTimeout( () =>{
      if (!this.toggle2) {
        this.toggle2 = true;
        this.status2 = !this.status2;
      } else{
        this.toggle2 = false;
        this.status2 = false;
      }
    },100)
  }

  toogleLinks4(event: Event){
    setTimeout( () =>{
      if (!this.toggle3) {
        this.toggle3 = true;
        this.status3 = !this.status3;
      } else{
        this.toggle3 = false;
        this.status3 = false;
      }
    },100)
  }

}


