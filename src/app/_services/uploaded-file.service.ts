import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadedFile } from '../_models/uploaded-file';

UploadedFile
const DOC_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
};

@Injectable({
  providedIn: 'root'
})
export class UploadedFileService {

  constructor(private http: HttpClient) { }
  /*
  addFile(uploadedFile: UploadedFile){
    return this.http.post<UploadedFile>(DOC_API+'fileupload',uploadedFile);
  }
  */

  addFile( formData:FormData): Observable<any> {
    return this.http.post(DOC_API+'fileupload',formData,{
    reportProgress: true,
    responseType: 'text'
    });
}

}