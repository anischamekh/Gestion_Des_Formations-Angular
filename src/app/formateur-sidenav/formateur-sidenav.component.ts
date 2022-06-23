import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';

@Component({
  selector: 'app-formateur-sidenav',
  templateUrl: './formateur-sidenav.component.html',
  styleUrls: ['./formateur-sidenav.component.css']
})
export class FormateurSidenavComponent implements OnInit {

  user :User = new User();
  constructor() { }

  ngOnInit(): void {
  }

}
