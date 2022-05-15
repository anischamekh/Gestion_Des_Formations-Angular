import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { FormateurDialogComponent } from '../formateur-dialog/formateur-dialog.component';
import { FormateurService } from '../_services/formateur.service';
@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns:String[]  = ['email','firstName','lastName','username','password','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private formateurService: FormateurService ) { }

  ngOnInit(): void {
    this.getFormateurList();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(FormateurDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getFormateurList();
      }
    })
  }
  

  deleteFormateur(id: number){
    this.formateurService.deleteFormateur(id)
    .subscribe({
      next:(res)=>{
        alert("Formateur supprimé avec succès");
        this.getFormateurList();
      },
      error:()=>{
        alert("Erreur lors de la suppression du formateur");
      }
    })
  }

  public getFormateurList(){
    this.formateurService.getFormateurList().subscribe({next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err)=>{alert("Erreur lors de la récupération des formateurs")}
  })
  }
  editFormateur(row : any){
    this.dialog.open(FormateurDialogComponent, {
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getFormateurList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
