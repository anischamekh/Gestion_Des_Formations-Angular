import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormationDialogComponent } from '../formation-dialog/formation-dialog.component';
import { MailDialogComponent } from '../mail-dialog/mail-dialog.component';
import { Theme } from '../_models/Theme';

import { User } from '../_models/User';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  user: User[] = [];
  theme: Theme[] = [];


  sideBarOpen = true;
  displayedColumns  = ['titre','description','dateDebut','dateFin','duree','image','lien','etat','theme','formateur','action'];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private formationService: FormationService ) { }

  ngOnInit(): void {
    this.getFormationList();
    this.formationService.getFormateurList().subscribe({next:(res)=>{this.user = res}})
    this.formationService.getThemesList().subscribe({next:(res)=>{this.theme = res}})
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(FormationDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Ajouter'){
        this.getFormationList();
      }
    });
  }

  deleteFormation(id: number){
    this.formationService.deleteFormation(id)
    .subscribe({
      next:(res)=>{
        alert("Formation supprimé avec succès");
        this.getFormationList();
      },
      error:()=>{
        alert("Erreur lors de la suppression du formation");
      }
    })
  }

  public getFormationList(){
    this.formationService.getFormationList().subscribe({next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err)=>{alert("Erreur lors de la récupération des formations")}
  })
  }
  editFormation(row : any){
    this.dialog.open(FormationDialogComponent, {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'Modifier'){
        this.getFormationList();
      }
    });
  }

  sendMail(){
    this.dialog.open(MailDialogComponent, {
      width:'30%',
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
