import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../_models/Formation';
import { Participant } from '../_models/Participant';

const PARTICIPANT_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  
  addParticipant(participant: Participant){
    return this.http.post<Participant>(PARTICIPANT_API+'addParticipant',participant);
  }
<<<<<<< HEAD
  
  /*
  addParticipant(idF: any, participant: Participant){
    return this.http.post<Participant>(PARTICIPANT_API+'addParticipant/'+idF,participant);
=======
  /*
  addParticipant(participant: Participant, id: any){
    return this.http.post<Participant>(PARTICIPANT_API+'addParticipant/'+id,participant);
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
  }
  */

  public getParticipant(cin: number): Observable<any> {
    return this.http.get(PARTICIPANT_API+'findtheme/'+cin);
  }
  
  public getParticipantsList() : Observable<Participant[]>{
    return this.http.get<Participant[]>(PARTICIPANT_API+'allParticipants');
  }

  public getFormationList() : Observable<Formation[]>{
    return this.http.get<Formation[]>(PARTICIPANT_API + 'allFormations');
  }

  public getFormation(id: number): Observable<any> {
    return this.http.get(PARTICIPANT_API + 'findFormation/'+id);
  }
}
