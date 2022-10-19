import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(public _authService: AuthService,
              private _router: Router,
              private _userService: UserService) { }

  ngOnInit(): void {
  }

  routeToSubscription(){
    this._userService.subscribed = true;
    this._router.navigate(['/subscribe']);
  }

}
