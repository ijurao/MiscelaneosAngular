import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `

<div [ngSwitch]="alert">

    <div  *ngSwitchCase="'success'" class="alert alert-success" role="alert">
      This is a success alert—check it out!
    </div>
    <div *ngSwitchCase="'info'" class="alert alert-info" role="alert">
      This is a danger alert—check it out!
    </div>
    <div *ngSwitchCase="'warning'" class="alert alert-warning" role="alert">
      This is a warning alert—check it out!
    </div>
    <div *ngSwitchDefault class="alert alert-danger" role="alert">
      This is a info alert—check it out!
    </div>

</div>
  `,
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  alert:string = 'info';
  constructor() { }

  ngOnInit(): void {
  }

}
