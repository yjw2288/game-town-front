import { Component, OnInit } from '@angular/core';
import {JoinService} from '../service/join/join.service';
import {LoginHolderService} from '../service/login/login-holder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private joinService:JoinService, 
    private loginHolderService:LoginHolderService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  join(email:string, password:string): void {
    this.joinService.join(email, password)
    .subscribe(joinResponse => {
      this.router.navigate(['/'])
    });
  }
}
