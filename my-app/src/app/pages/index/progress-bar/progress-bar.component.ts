import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { fromEvent } from "rxjs";
import { map, share, tap } from "rxjs/operators";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


  @Output() progressValue = new EventEmitter();
  progress$;




  getprogressValue() {
    this.progress$ = fromEvent(window, "scroll").pipe(
      map(() => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        return Math.round((winScroll / height) * 100);
      }),
      tap(v => this.progressValue.emit(v))
    );
  }
  
  ngOnInit() {
    this.getprogressValue();
  }

}
