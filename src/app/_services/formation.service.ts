import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../_models/Formation';
import { Theme } from '../_models/Theme';
import { User } from '../_models/User';


const FORMATION_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

   addFormation(formation: Formation){
    return this.http.post<Formation>(FORMATION_API + 'addFormation',formation);
  }  

  public putFormation(formation: Formation, id: number){
    return this.http.put<Formation>(FORMATION_API + 'updateFormation/'+id,formation);
  }

  public getFormation(id: number): Observable<any> {
    return this.http.get(FORMATION_API + 'findformation/'+id);
  }
  
  public getFormationList() : Observable<Formation[]>{
    return this.http.get<Formation[]>(FORMATION_API + 'allFormations');
  }

  public deleteFormation(id: number):Observable<void>{
    return this.http.delete<void>(FORMATION_API + 'deleteFormation/'+id);
  }

  public getThemesList() : Observable<Theme[]>{
    return this.http.get<Theme[]>(FORMATION_API+"allthemes");
  }

  public getFormateurList() : Observable<User[]>{
    return this.http.get<User[]>(FORMATION_API + 'allformateurs');
  }

}