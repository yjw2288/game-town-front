import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginResponse } from './LoginResponse'

@Injectable({
  providedIn: 'root'
})
export class LoginRequestService {

  constructor(private http:HttpClient) { }

  login(email:string, password: string): Observable<LoginResponse> {
    const request = { email : email, password : password}

    return this.http.post<LoginResponse>("/api/accounts/login", request);
  }

  logout() : Observable<string> {
      return this.http.post<string>("/api/accounts/logout", {});
  }
}
