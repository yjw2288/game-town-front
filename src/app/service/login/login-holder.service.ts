import { Injectable } from '@angular/core';

import { CookieService } from '../../utils/cookie.service'

@Injectable({
  providedIn: 'root'
})
export class LoginHolderService {
  constructor(private cookieService:CookieService) { 
  }

  getLoginToken() : string {
    return this.cookieService.getCookie("loginToken");
  }

  isLogin() : boolean {
    return this.getLoginToken() !== '';
  }
}
