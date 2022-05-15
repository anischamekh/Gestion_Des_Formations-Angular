import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Mail } from '../_models/mail';
import { MailService } from '../_services/mail.service';

@Component({
  selector: 'app-mail-dialog',
  templateUrl: './mail-dialog.component.html',
  styleUrls: ['./mail-dialog.component.css']
})
export class MailDialogComponent implements OnInit {

  actionBtn : String = "Ajouter"
  mailForm!: FormGroup;
  public mail!: Mail[];
  constructor(private formBuilder: FormBuilder, 
              private mailService: MailService, 
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<MailDialogComponent>,) { }

  ngOnInit(): void {
    this.mailForm = this.formBuilder.group({
      destinaire:['',Validators.required],
      objet:['',Validators.required],
      message:['',Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Modifier";
      this.mailForm.controls['destinaire'].setValue(this.editData.destinaire);
      this.mailForm.controls['objet'].setValue(this.editData.objet);
      this.mailForm.controls['message'].setValue(this.editData.message);
    }
  }
  
  
  addMail() {
    if(!this.editData){
      if(this.mailForm.valid){
        this.mailService.addMail(this.mailForm.value).subscribe
        ({next:(res)=>{alert("Mail envoyé avec succès");
          this.mailForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Erreur lors de l'envoi du mail")
        }
        })
      }
    }
  }

}