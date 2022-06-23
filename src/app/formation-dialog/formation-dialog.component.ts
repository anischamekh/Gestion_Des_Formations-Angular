import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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


  imageURL: any;
  userFile: any;
  public message!:string;
  public imagePath: any;

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
          dateDebut:['',Validators.required],
          dateFin:['',Validators.required],
          duree:['',Validators.required],
          lien:['',Validators.required],
          image:['',Validators.required],
          formateur:['',Validators.required],
          theme:['',Validators.required],
        })
          if (this.editData) {
              this.actionBtn = "Modifier";
              this.formationForm.controls['titre'].setValue(this.editData.titre);
              this.formationForm.controls['description'].setValue(this.editData.description);
              this.formationForm.controls['dateDebut'].setValue(this.editData.dateDebut);
              this.formationForm.controls['dateFin'].setValue(this.editData.dateFin);      
              this.formationForm.controls['duree'].setValue(this.editData.duree);
              this.formationForm.controls['lien'].setValue(this.editData.lien);     
              this.formationForm.controls['image'].setValue(this.editData.image);     
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
                fortRequest.titre=this.formationForm.get('titre')?.value;
                fortRequest.description=this.formationForm.get('description')?.value;
                fortRequest.dateDebut=this.formationForm.get('dateDebut')?.value;
                fortRequest.dateFin=this.formationForm.get('dateFin')?.value;
                fortRequest.duree=this.formationForm.get('duree')?.value;
                fortRequest.lien=this.formationForm.get('lien')?.value;
                fortRequest.image=this.formationForm.get('image')?.value;
                let them=new Theme();
                them.id=this.formationForm.get('theme')?.value;
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

            let fortRequest=new Formation();
                fortRequest.titre=this.formationForm.get('titre')?.value;
                fortRequest.description=this.formationForm.get('description')?.value;
                fortRequest.dateDebut=this.formationForm.get('dateDebut')?.value;
                fortRequest.dateFin=this.formationForm.get('dateFin')?.value;
                fortRequest.duree=this.formationForm.get('duree')?.value;
                fortRequest.lien=this.formationForm.get('lien')?.value;
                fortRequest.image=this.formationForm.get('image')?.value;
                let them=new Theme();
                them.id=this.formationForm.get('theme')?.value;
                fortRequest.theme=them;
                let format =new User();
                format.id=this.formationForm.get('formateur')?.value;
                fortRequest.user=format;

            this.formationService.putFormation(fortRequest,this.editData.id).subscribe({
              next:(res)=>{
                alert("Formation mis à jour avec succès");
                this.formationForm.reset();
                this.dialogRef.close('update');
              },
              error:()=>{
                alert("Erreur lors de la mise à jour du formation")
                console.log(this.editData.theme.id);
              }
            })
          }

          onSelectFile(event:any) {
            if(event.target.files.length > 0) {
              const file = event.target.files[0];
              this.userFile = file;

              var mimeType = event.target.files[0].type;
              if(mimeType.match(/image\/*/)== null){
                this.message = "only images are supported";
                return;
              }
             
              var reader = new FileReader();
              this.imagePath = file;
              reader.readAsDataURL(file);
              reader.onload = (_event) => {
                this.imageURL = reader.result;
                }
            
              };
            
            }

}
