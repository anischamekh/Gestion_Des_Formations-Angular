import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../_models/Theme';


const THEME_API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }


  addTheme(theme: Theme){
    return this.http.post<Theme>(THEME_API+'addtheme',theme);
  }

  public putTheme(theme: Theme, codeTheme: String){
    return this.http.put<Theme>(THEME_API+'updatetheme/'+codeTheme,theme);
  }

  public getTheme(codeTheme: String): Observable<any> {
    return this.http.get(THEME_API+'findtheme/'+codeTheme);
  }
  
  public getThemesList() : Observable<Theme[]>{
    return this.http.get<Theme[]>(THEME_API+"allthemes");
  }

  public deleteTheme(codeTheme: String):Observable<void>{
    return this.http.delete<void>(THEME_API+'deleteTheme/'+codeTheme);
  }
}
