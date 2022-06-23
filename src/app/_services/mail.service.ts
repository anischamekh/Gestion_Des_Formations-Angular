import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from '../_models/Mail';

const MAIL_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  public addMail(mail: Mail){
    return this.http.post<Mail>(MAIL_API + 'addMail',mail);
  }  

  public sendUser( id: number){
    return this.http.post<Mail>(MAIL_API + 'sendAccount/'+id,{});
  } 
  
  public sendFormation(idP: number, idF: number){
    return this.http.post<Mail>(MAIL_API + 'sendFormation/'+idP+'/'+idF,{});
  } 

  public sendEvaluation( id: number){
    return this.http.post<Mail>(MAIL_API + 'sendEvaluation/'+id,{});
  } 
  
  public getMailsList() : Observable<Mail[]>{
    return this.http.get<Mail[]>(MAIL_API + 'allMails');
  }
}
