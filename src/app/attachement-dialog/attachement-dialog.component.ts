import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
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
<<<<<<< HEAD
  currentFileUploadRecto?: File;
  formDataVerso: FormData = new FormData();
=======
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704

  constructor(private formBuilder: FormBuilder, 
              private formationService: FormationService,
              private uploadedFileService: UploadedFileService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<FormationDialogComponent>,) { }

  ngOnInit(): void {
    this.docForm = this.formBuilder.group({
<<<<<<< HEAD
      fileData:new FormControl('', [Validators.required]),
=======
      fileData:['',Validators.required],
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
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
<<<<<<< HEAD
          //docRequest.fileData=this.docForm.get('fileData')?.value;
  
          let fort=new Formation();
          fort.id=this.docForm.get('formation')?.value;
          docRequest.formation=fort;

          this.formDataVerso.append('dto', JSON.stringify(fort));
          this.formDataVerso.append('fileData', this.currentFileUploadRecto as File);


         console.log('this.docRequest.value  ***'+this.formDataVerso)
          
        this.uploadedFileService.addFile(this.formDataVerso).subscribe
        ({next:(res)=>{alert("Document ajouté avec succès");
=======
          docRequest.fileData=this.docForm.get('fileData')?.value;

          let fort=new Formation();
          fort.id=this.docForm.get('formation')?.value;
          docRequest.formation=fort;
         console.log('this.formationForm.value  ***'+docRequest)
          
        this.uploadedFileService.addFile(this.docForm.value).subscribe
        ({next:(res)=>{alert("Formateur ajouté avec succès");
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
          this.docForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
<<<<<<< HEAD
          alert("erreur lors de l'ajout du document")
=======
          alert("erreur lors de l'ajout du formateur")
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
        }
        })
      }
    }
<<<<<<< HEAD

    onFileRectoChange(event:any) {
      this.currentFileUploadRecto = <File>event.target.files[0];
    alert("event" + this.currentFileUploadRecto);
  }
/*
  onFileRectoChange(event:any) {
    this.currentFileUploadRecto = <File>event.target.files[0];
    for (let i = 0; i < event.length; i++)
    this.formDataVerso.append('fileRecto', event[0]);


    this.message = [];
    this.progressInfos = [];
    this.selectedFilesRecto = event.target.files;
    this.previewsRecto = [];
    if (this.selectedFilesRecto && this.selectedFilesRecto[0]) {
      const numberOfFiles = this.selectedFilesRecto.length;
    }
  }
  */
    
=======
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
}
