import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Formation } from '../_models/Formation';
=======
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

<<<<<<< HEAD
  sideBarOpen = true;
  formation: Formation = new Formation();

  constructor() { }

  ngOnInit(): void {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}

=======
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
