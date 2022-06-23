import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evaluation } from '../_models/evaluation';
import { Formation } from '../_models/Formation';
import { EvaluationService } from '../_services/evaluation.service';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  formations: Formation[] = [];

  evaluationForm!: FormGroup;
  constructor(private formationService: FormationService,
              private evaluationService: EvaluationService,
              private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.evaluationForm = this.formBuilder.group({
        fullName:['',Validators.required],
        difficulte:['',Validators.required],
        rythme:['',Validators.required],
        attentes:['',Validators.required],
        objectifsAtteints:['',Validators.required],
        inscription:['',Validators.required],
        duree:['',Validators.required],
        dates:['',Validators.required],
        niveau:['',Validators.required],
        langageTenu:['',Validators.required],
        noteFormateur:['',Validators.required],
        noteFormation:['',Validators.required],
        onligneOrPres:['',Validators.required],
        dispensions:['',Validators.nullValidator],
        idees:['',Validators.nullValidator],
        formation:['',Validators.required],
      });

    this.formationService.getFormationList().subscribe({next:(res)=>{this.formations = res}})
  }


  addEvaluation() {
      if(this.evaluationForm.valid){
        let evalRequest=new Evaluation();
        evalRequest.fullName=this.evaluationForm.get('fullName')?.value;
        evalRequest.difficulte=this.evaluationForm.get('difficulte')?.value;
        evalRequest.rythme=this.evaluationForm.get('rythme')?.value;
        evalRequest.attentes=this.evaluationForm.get('attentes')?.value;
        evalRequest.objectifsAtteints=this.evaluationForm.get('objectifsAtteints')?.value;
        evalRequest.inscription=this.evaluationForm.get('inscription')?.value;
        evalRequest.duree=this.evaluationForm.get('duree')?.value;
        evalRequest.dates=this.evaluationForm.get('dates')?.value;
        evalRequest.niveau=this.evaluationForm.get('niveau')?.value;
        evalRequest.langageTenu=this.evaluationForm.get('langageTenu')?.value;
        evalRequest.noteFormateur=this.evaluationForm.get('noteFormateur')?.value;
        evalRequest.noteFormation=this.evaluationForm.get('noteFormation')?.value;
        evalRequest.onligneOrPres=this.evaluationForm.get('onligneOrPres')?.value;
        evalRequest.dispensions=this.evaluationForm.get('dispensions')?.value;
        evalRequest.idees=this.evaluationForm.get('idees')?.value;

        let format=new Formation();
        format.id=this.evaluationForm.get('formation')?.value;
        evalRequest.formation=format;

        this.evaluationService.addEvaluation(evalRequest).subscribe
        ({next:(res)=>{alert("Evaluation ajouté avec succès");
          this.evaluationForm.reset();
        },
        error:()=>{
          alert("erreur lors de l'ajout du formation")
        }
        })
      }
    }
  }