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

  public _modeNum: number = 1;
  public _MODES: Array<string> = ['over', 'push', 'slide'];

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
