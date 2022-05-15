import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../_models/User';

import { FormationService } from '../_services/formation.service';

import { FormateurComponent } from '../formateur/formateur.component';
import { Formation } from '../_models/Formation';
import { Theme } from '../_models/Theme';


@Component({
  selector: 'app-formation-dialog',
  templateUrl: './formation-dialog.component.html',
  styleUrls: ['./formation-dialog.component.css']
})
export class FormationDialogComponent implements OnInit {

  themeSelectedValue: string ="";
  formateurSelectedValue: string ="";
  users: User[] = [];
  themes: Theme[] = [];

  actionBtn : String = "Ajouter"
  formationForm !: FormGroup;
  
  public formation!: Formation[];
  allUsers: any;
  constructor(private formBuilder: FormBuilder, 
              private formationService: FormationService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<FormationDialogComponent>,) { }

     ngOnInit(): void {
        this.formationForm = this.formBuilder.group({
          titre:['',Validators.required],
          description:['',Validators.required],
          date:['',Validators.required],
          formateur:['',Validators.required],
          theme:['',Validators.required],
        })
          if (this.editData) {
              this.actionBtn = "Modifier";
              this.formationForm.controls['titre'].setValue(this.editData.titre);
              this.formationForm.controls['description'].setValue(this.editData.description);
              this.formationForm.controls['date'].setValue(this.editData.date);     
              this.formationForm.controls['formateur'].setValue(this.editData.user.id);
              this.formationForm.controls['theme'].setValue(this.editData.theme.id);
              }

              this.formationService.getFormateurList().subscribe({next:(res)=>{this.users = res}})
              this.formationService.getThemesList().subscribe({next:(res)=>{this.themes = res}})
          };

          addFormation() {
            if(!this.editData){
              if(this.formationForm.valid){
                let fortRequest=new Formation();
                fortRequest.date=this.formationForm.get('date')?.value;
                fortRequest.titre=this.formationForm.get('titre')?.value;
                fortRequest.description=this.formationForm.get('description')?.value;
                let them=new Theme();
                them.id=this.formationForm.get('theme')?.value;
                them.codeTheme=this.formationForm.get('theme')?.value;
                fortRequest.theme=them;
                let format =new User();
                format.id=this.formationForm.get('formateur')?.value;
                fortRequest.user=format;
               console.log('this.formationForm.value  ***'+fortRequest)
                this.formationService.addFormation(fortRequest).subscribe
                ({next:(res)=>{alert("Formation ajouté avec succès");
                  this.formationForm.reset();
                  this.dialogRef.close('Ajouter');
                },
                error:()=>{
                  alert("erreur lors de l'ajout du formation")
                }
                })
              }
            }else{
              this.updateFormation();
            }
          }

          
          public updateFormation(){
            this.formationService.putFormation(this.formationForm.value,this.editData.id).subscribe({
              next:(res)=>{
                alert("Formation mis à jour avec succès");
                this.formationForm.reset();
                this.dialogRef.close('update');
              },
              error:()=>{
                alert("Erreur lors de la mise à jour du formation")
              }
            })
          }
}
