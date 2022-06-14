import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormationDialogComponent } from '../formation-dialog/formation-dialog.component';
import { Formation } from '../_models/Formation';
import { UploadedFile } from '../_models/uploaded-file';
import { FormationService } from '../_services/formation.service';
import { UploadedFileService } from '../_services/uploaded-file.service';

@Component({
  selector: 'app-attachement-dialog',
  templateUrl: './attachement-dialog.component.html',
  styleUrls: ['./attachement-dialog.component.css']
})
export class AttachementDialogComponent implements OnInit {

  formations: Formation[] = [];
  docForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private formationService: FormationService,
              private uploadedFileService: UploadedFileService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<FormationDialogComponent>,) { }

  ngOnInit(): void {
    this.docForm = this.formBuilder.group({
      fileData:['',Validators.required],
      formation:['',Validators.required]
    });
    
    this.formationService.getFormationList().subscribe({next:(res)=>{this.formations = res}})

    if(this.editData){
      this.docForm.controls['fileData'].setValue(this.editData.fileData);
      this.docForm.controls['formation'].setValue(this.editData.formation);
    }
  }

  addFile() {
      if(this.docForm.valid){
          let docRequest=new UploadedFile();
          docRequest.fileData=this.docForm.get('fileData')?.value;

          let fort=new Formation();
          fort.id=this.docForm.get('formation')?.value;
          docRequest.formation=fort;
         console.log('this.formationForm.value  ***'+docRequest)
          
        this.uploadedFileService.addFile(this.docForm.value).subscribe
        ({next:(res)=>{alert("Formateur ajouté avec succès");
          this.docForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("erreur lors de l'ajout du formateur")
        }
        })
      }
    }
}
