import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../_models/User';
import { FormateurService } from '../_services/formateur.service';

@Component({
  selector: 'app-formateur-dialog',
  templateUrl: './formateur-dialog.component.html',
  styleUrls: ['./formateur-dialog.component.css']
})
export class FormateurDialogComponent implements OnInit {

  actionBtn : String = "Ajouter"
  formateurForm!: FormGroup;
  public user!: User[];
  constructor(private formBuilder: FormBuilder, 
              private formateurService: FormateurService, 
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<FormateurDialogComponent>) { }

  ngOnInit(): void {
    this.formateurForm = this.formBuilder.group({
      email:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Modifier";
      this.formateurForm.controls['email'].setValue(this.editData.email);
      this.formateurForm.controls['firstName'].setValue(this.editData.firstName);
      this.formateurForm.controls['lastName'].setValue(this.editData.lastName);     
      this.formateurForm.controls['username'].setValue(this.editData.username);
      this.formateurForm.controls['password'].setValue(this.editData.password); 
    }
  }

  addFormateur() {
    if(!this.editData){
      if(this.formateurForm.valid){
        this.formateurService.addFormateur(this.formateurForm.value).subscribe
        ({next:(res)=>{alert("Formateur ajouté avec succès");
          this.formateurForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("erreur lors de l'ajout du formateur")
        }
        })
      }
    }else{
      this.updateFormateur();
    }
  }

  updateFormateur(){
    this.formateurService.putFormateur(this.formateurForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("Formateur mis à jour avec succès");
        this.formateurForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Erreur lors de la mise à jour du formateur")
      }
    })
  }
}
