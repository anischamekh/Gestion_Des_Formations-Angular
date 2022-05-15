import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeDialogComponent } from '../theme-dialog/theme-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { ThemeService } from '../_services/theme.service';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  sideBarOpen = true;
  displayedColumns:String[]  = ['codeTheme','libelleTheme','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getThemesList();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(ThemeDialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getThemesList();
      }
    });
  }

  deleteTheme(codeTheme: String){
    this.themeService.deleteTheme(codeTheme)
    .subscribe({
      next:(res)=>{
        alert("Thème supprimé avec succès");
        this.getThemesList();
      },
      error:()=>{
        alert("Erreur lors de la suppression du thème");
      }
    })
  }
   public getThemesList(){
      this.themeService.getThemesList().subscribe({next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{alert("Erreur lors de la récupération des thèmes")}
    })
    }
    editTheme(row : any){
      this.dialog.open(ThemeDialogComponent, {
        width:'30%',
        data:row
      }).afterClosed().subscribe(val=>{
        if(val === 'update'){
          this.getThemesList();
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
