import { ROUTING } from './../workoutFront/const/routing.const';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  ROUTING = ROUTING;
  constructor() { }

  ngOnInit(): void {
  }

}
