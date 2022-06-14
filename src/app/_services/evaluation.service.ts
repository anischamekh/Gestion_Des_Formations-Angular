import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from '../_models/evaluation';
  
  const Evaluation_API = 'http://localhost:8080/';
  
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  @Injectable({
    providedIn: 'root'
  })
  export class EvaluationService {
  
    constructor(private http: HttpClient) { }
  
    
     public addEvaluation(evaluation: Evaluation){
      return this.http.post<Evaluation>(Evaluation_API + 'addEvaluation',evaluation);
    }  
    
    public getEvaluationList() : Observable<Evaluation[]>{
      return this.http.get<Evaluation[]>(Evaluation_API + 'allEvaluations');
    }
}