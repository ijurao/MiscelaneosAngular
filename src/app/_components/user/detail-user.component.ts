import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  template: `
    <p>
      detail-user works!
    </p>
  `,
  styles: [
  ]
})
export class DetailUserComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(x => console.log("from children" + x.id))


  }

  ngOnInit(): void {
  }

}
