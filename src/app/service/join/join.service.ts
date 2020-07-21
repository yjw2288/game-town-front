import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JoinResponse } from './JoinResponse'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor(private http:HttpClient) { }

  join(email:string, password:string) : Observable<JoinResponse> {
    const request = { email : email, password : password}
    return this.http.post<JoinResponse>("/api/accounts/join", request);
  }
}
