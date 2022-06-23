import { Component, OnInit } from '@angular/core';
import { Formation } from '../_models/Formation';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  sideBarOpen = true;
  formation: Formation = new Formation();

  constructor() { }

  ngOnInit(): void {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}

