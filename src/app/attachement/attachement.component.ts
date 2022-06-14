import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttachementDialogComponent } from '../attachement-dialog/attachement-dialog.component';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-attachement',
  templateUrl: './attachement.component.html',
  styleUrls: ['./attachement.component.css']
})
export class AttachementComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns  = ['nomD','formation','action'];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private formationService: FormationService ){ }


  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    this.dialog.open(AttachementDialogComponent, {
      width:'30%'
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