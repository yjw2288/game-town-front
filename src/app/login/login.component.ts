import { Component, OnInit } from '@angular/core';
import { LoginRequestService } from '../service/login/login-request.service';
import { Router } from '@angular/router';
import { LoginHolderService } from '../service/login/login-holder.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginRequestService:LoginRequestService,
    private loginHolderService:LoginHolderService,
    private router:Router) { }

  ngOnInit(): void {
  }

  login(email:string, password:string) {
    this.loginRequestService.login(email, password)
    .subscribe(joinResponse => {
      this.router.navigate(['/'])
    });
  }
}
