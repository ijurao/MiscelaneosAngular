import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template: `

    <div  class="alert" [ngClass]="clase" role="alert">
      This is a primary alert—check it out!
    </div>

    <button class="btn btn-info" (click)="clase='alert-success'">Change</button>
    <h3 [ngClass]="{'text-danger': propiedades.danger}">
      Hola Mundo
    </h3>
    <button class="btn btn-info" (click)="propiedades.danger = !propiedades.danger">Cambiar2</button>

    <br><br>

    <h3>Proceso asincrono</h3>

    <button class="btn btn-primary" (click)="load()" [disabled]="loading">
      <i class="fa"  [ngClass]="{'fa-refresh fa-spin': loading, 'fa-save': !loading}"></i>
      Guardar Cambios
    </button>

  `,
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  clase:string = "alert-primary";
  loading:boolean = false;
  propiedades = {
      danger: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  load(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
