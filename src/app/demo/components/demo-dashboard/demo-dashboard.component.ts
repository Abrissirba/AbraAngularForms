import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abra-demo-dashboard',
  templateUrl: './demo-dashboard.component.html',
  styleUrls: ['./demo-dashboard.component.scss']
})
export class DemoDashboardComponent implements OnInit {

  routes = [{
    title: 'Fields',
    path: 'fields'
  }, {
    title: 'Add form',
    path: 'edit-form'
  }]

  constructor() { }

  ngOnInit() {
  }

}
