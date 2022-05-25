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
  
  public getMailsList() : Observable<Mail[]>{
    return this.http.get<Mail[]>(MAIL_API + 'allMails');
  }
}
