import { Component, OnInit } from '@angular/core';
import {LoginRequestService} from '../service/login/login-request.service';
import { LoginHolderService } from '../service/login/login-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginHolderService:LoginHolderService,
    private router:Router,
    private loginRequestService:LoginRequestService) { }

  ngOnInit(): void {
  }

  isLogin() : boolean {
    return this.loginHolderService.isLogin();
  }

  logout() : void {
    this.loginRequestService.logout()
      .subscribe(joinResponse => {
      this.router.navigate(['/'])
    });
  }
}
