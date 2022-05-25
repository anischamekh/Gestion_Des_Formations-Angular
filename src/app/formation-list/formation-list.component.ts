import { Component, OnInit } from '@angular/core';
import { Formation } from '../_models/Formation';
import { ParticipantService } from '../_services/participant.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  formation: Formation = new Formation();
  formations: Formation[] = [];
  totalLength: any;
  page: number = 1;

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getFormationList().subscribe({next:(res)=>{this.formations = res}})
    this.totalLength = this.formations.length;
  }

}
