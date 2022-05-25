import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionComponent } from '../inscription/inscription.component';
import { Formation } from '../_models/Formation';
import { ParticipantService } from '../_services/participant.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() format!: any;
  content?: string;
  
  formations: Formation[] = [];

  constructor(private dialog: MatDialog,
              private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getFormationList().subscribe({next:(res)=>{this.formations = res}})
  }

  openDialog(id: number) {
    this.dialog.open(InscriptionComponent, {
      width:'30%',
    }),console.log(id)
  }
}
