import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadedFile } from '../_models/uploaded-file';

UploadedFile
const DOC_API = 'http://localhost:8080/';

const httpOptions = {
<<<<<<< HEAD
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
=======
  headers: new HttpHeaders({'Content-Type': 'application/form-data'})
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704
};

@Injectable({
  providedIn: 'root'
})
export class UploadedFileService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
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
=======

  addFile(uploadedFile: UploadedFile){
    return this.http.post<UploadedFile>(DOC_API+'fileupload',uploadedFile);
  }
>>>>>>> 81aebaa8e5ea75bbe494af581c20b1c653bd3704

}