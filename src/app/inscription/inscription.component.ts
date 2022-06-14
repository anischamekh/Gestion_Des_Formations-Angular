import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../_models/Formation';
import { Participant } from '../_models/Participant';
import { ParticipantService } from '../_services/participant.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  registerForm!: FormGroup;
  formations: Formation[] = [];

  participant: Participant[] = [];
  id!:number;

  constructor(private formBuilder: FormBuilder, 
              private participantService: ParticipantService, 
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<InscriptionComponent>,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      cin:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      tel:['',Validators.required],
      ville:['',Validators.required],
      //formation:['',Validators.required],
    })
    this.participantService.getFormationList().subscribe({next:(res)=>{this.formations = res}});


  }


/*
  addParticipant(id:number){
    this.participantService.addParticipant(this.registerForm.value,id).subscribe({
      next:(res)=>{
        alert("Thème mis à jour avec succès");
      },
      error:()=>{
        alert("Erreur lors de la mise à jour du thème")
      }
    })
  }

  */
  addParticipant() {
      if(this.registerForm.valid){
        let partRequest=new Participant();
        partRequest.cin=this.registerForm.get('cin')?.value;
        partRequest.firstName=this.registerForm.get('firstName')?.value;
        partRequest.lastName=this.registerForm.get('lastName')?.value;
        partRequest.email=this.registerForm.get('email')?.value;
        partRequest.tel=this.registerForm.get('tel')?.value;
        partRequest.ville=this.registerForm.get('ville')?.value;

        console.log("test : "+ partRequest.formation);

        let format =new Formation();
        format.id=this.registerForm.get('formation')?.value;
        partRequest.formation=format;


        console.log("id : "+ partRequest.formation)
        console.log('this.formationForm.value  ***'+partRequest)
        
        this.participantService.addParticipant(partRequest).subscribe
        ({next:(res)=>{alert("Participant ajouté avec succès");
          this.registerForm.reset();
          this.dialogRef.close('Ajouter');
        },
        error:()=>{
          alert("erreur lors de l'ajout du participant")
        }
        })
      }
  }
}