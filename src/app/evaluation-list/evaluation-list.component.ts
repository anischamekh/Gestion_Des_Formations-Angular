import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluationService } from '../_services/evaluation.service';


@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.css']
})
export class EvaluationListComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns  = ['fullName','formation','difficulte','rythme','attentes','objectifsAtteints','inscription','duree','dates','niveau','langageTenu','noteFormateur','noteFormation','onligneOrPres','dispensions','idees'];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private evaluationService: EvaluationService ) { }

  ngOnInit(): void {
    this.getEvaluationList();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  public getEvaluationList(){
    this.evaluationService.getEvaluationList().subscribe({next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err)=>{alert("Erreur lors de la récupération des evaluations")}
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
