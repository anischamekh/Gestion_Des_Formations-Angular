import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

const FORMATEUR_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }

  
   public addFormateur(user: User){
    return this.http.post<User>(FORMATEUR_API + 'addformateur',user);
  }  

  public putFormateur(formateur: User, id: number){
    return this.http.put<User>(FORMATEUR_API + 'updateformateur/'+id,formateur);
  }

  public getFormateur(id: number): Observable<any> {
    return this.http.get(FORMATEUR_API + 'findformateur/'+id);
  }
  
  public getFormateurList() : Observable<User[]>{
    return this.http.get<User[]>(FORMATEUR_API + 'allformateurs');
  }

  public deleteFormateur(id: number):Observable<void>{
    return this.http.delete<void>(FORMATEUR_API + 'deleteformateur/'+id);
  }
}