import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public current_height_percentage: number = 16;

  @HostListener('window:scroll', ['$event'])
  calculateScrollPercentage(event: any) {

    

    var current_height =(document.documentElement.scrollTop + window.innerHeight)/document.documentElement.scrollHeight;
    
    if (current_height > 1) {current_height = 1};
     current_height = Math.floor(100* current_height);
    this.current_height_percentage = current_height;
  }


}
