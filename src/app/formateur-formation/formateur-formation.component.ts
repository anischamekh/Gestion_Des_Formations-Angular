import { Component, OnInit } from '@angular/core';
import { Formation } from '../_models/Formation';
import { ParticipantService } from '../_services/participant.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-formateur-formation',
  templateUrl: './formateur-formation.component.html',
  styleUrls: ['./formateur-formation.component.css']
})
export class FormateurFormationComponent implements OnInit {

  formation: Formation = new Formation();
  formations: Formation[] = [];
  totalLength: any;
  page: number = 1;
  sideBarOpen = true;
  currentUser: any;
  isLoggedIn = false;

  constructor(private participantService: ParticipantService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
    this.currentUser = this.tokenStorageService.getUser();


      this.participantService.getFormationList().subscribe({next:(res)=>{this.formations = res}})

    this.totalLength = this.formations.length;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
