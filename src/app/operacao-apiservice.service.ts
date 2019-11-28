import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {

  apiUrl: string = "http://172.16.58.22:8001/api/funcoes/divisao/";


  constructor(public httpclient : HttpClient) {
    
   }
   handleError(error) {
  
  let errorMessage = `Código de erro: ${error.status}\nMenssagem: ${error.message}`;
  alert(errorMessage);
  return throwError(errorMessage);
   }
   getCep(num1: string, num2: string) : Observable<string> {
  
  return this.httpclient.get<string>(this.apiUrl + num1 + "/" + num2 )
  .pipe(retry(1),
  catchError(this.handleError));
  }

}
