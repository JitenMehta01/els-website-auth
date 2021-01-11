import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

  showSideNav = true;
  menuLogin = false;
  router: string;

  constructor(private _router: Router){

    this.router = _router.url; 
}



  ngOnInit(): void {
  }

  menu_links = [
    {
       'name': 'Learning', 
       'toggled': false,
       'children' : [
         {'name': 'People Skills'},
         {'name': 'VR Learning'},
         {'name': 'Serious Games'},
         {'name': 'E-learning'},
         {'name': 'Patnerships'},
        ]
    },
    {
       'name': 'Platform',
       'toggled': false,
       'children' : [
         {'name': 'Monitor, Measure, Report'},
         {'name': 'GDPR'},
         {'name': 'LMS intergration'},
        ]
    },
    {
       'name': 'Delivery',
       'toggled': false,
       'children' : [
         {'name': 'Simple at Scale'},
         {'name': 'Branded Headsets'},
         {'name': "FAQ's"},
        ]
    },
    {
       'name': 'About Us', 
       'toggled': false,
       'children' : [
         {'name': 'Team Profiles'},
         {'name': 'Awards'},
         {'name': 'Arrange a Demo'},
        ]
    },
  ]

  opened: boolean = false;

    

  openMenu(event: Event){
    this.opened = !this.opened;
  }


}
