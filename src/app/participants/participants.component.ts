import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ParticipantService } from '../_services/participant.service';
import { MailService } from '../_services/mail.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns:String[]  = ['cin','email','firstName','lastName','tel','ville','formation','lienF','eval'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private participantService: ParticipantService ,private mailService: MailService) { }

  ngOnInit(): void {
    this.getParticipantsList();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  public getParticipantsList(){
    this.participantService.getParticipantsList().subscribe({next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err)=>{alert("Erreur lors de la récupération des formateurs")}
  })
  }

  sendFormation(idP: number,idF: number){
    this.mailService.sendFormation(idP,idF)
    .subscribe({
      next:(res)=>{
        console.log('this.user.id  ***'+idP+' '+idF)
        alert("Mail envoyée avec succès");
      },
      error:()=>{
        console.log('this.user.id  ***'+idP+' '+idF)
        alert("Mail envoyée avec succès");
      }
    })
  }


  sendEvaluation(id: number){
    this.mailService.sendEvaluation(id)
    .subscribe({
      next:(res)=>{
        console.log('this.user.id  ***'+id)
        alert("Mail envoyée avec succès");
      },
      error:()=>{
        console.log('this.user.id  ***'+id)
        alert("Mail envoyée avec succès");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
