import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Theme } from '../_models/Theme';
import { ThemeService } from '../_services/theme.service';

@Component({
  selector: 'app-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrls: ['./theme-dialog.component.css']
})
export class ThemeDialogComponent implements OnInit {

  actionBtn : String = "Ajouter"
  themeForm!: FormGroup;
  public theme!: Theme[];
  constructor(private formBuilder: FormBuilder, 
              private themeService: ThemeService, 
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ThemeDialogComponent>,) { }

  ngOnInit(): void {
    this.themeForm = this.formBuilder.group({
      codeTheme:['',Validators.required],
      libelleTheme:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Modifier";
      this.themeForm.controls['codeTheme'].setValue(this.editData.codeTheme);
      this.themeForm.controls['libelleTheme'].setValue(this.editData.libelleTheme);
    }
  }
  
  
  addTheme() {
    if(!this.editData){
      if(this.themeForm.valid){
        this.themeService.addTheme(this.themeForm.value).subscribe
        ({next:(res)=>{alert("Thème ajouté avec succès");
          this.themeForm.reset();
          this.dialogRef.close('Ajouter');
        },
        error:()=>{
          alert("erreur lors de l'ajout du thème")
        }
        })
      }
    }else{
      this.updateTheme()
    }
  }
  updateTheme(){
    this.themeService.putTheme(this.themeForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("Thème mis à jour avec succès");
        this.themeForm.reset();
        this.dialogRef.close('Modifier');
      },
      error:()=>{
        alert("Erreur lors de la mise à jour du thème")
      }
    })
  }

}
