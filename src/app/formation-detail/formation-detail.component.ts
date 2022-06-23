import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { Formation } from '../_models/Formation';
import { ParticipantService } from '../_services/participant.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  formation: Formation = new Formation();
  constructor(private participantService: ParticipantService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=> {
        this.getFormationList();
    });
  }
    getFormationList(){
    const id: any = this.route.snapshot.paramMap.get('id');
    this.participantService.getFormation(id).subscribe(
      data => {
            this.formation = data;
      });
  }

  openDialog(id: number) {
    this.dialog.open(InscriptionComponent, {
      width:'30%',
      data: {id}
    }),console.log(id)
  }

}
